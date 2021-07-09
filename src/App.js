import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [figures, setFigures] = useState([
    {
      id: 1,
      draggable: true,
      className: "columnLeft__listObj listObjs__firstObj",
    },
    {
      id: 2,
      draggable: true,
      className: "columnLeft__listObj listObjs__secondObj",
    },
  ]);

// Deleted div ellement, when you click on figure

  const handleKeyPress = (e) => {
    if (e.code === "Delete") {
      //Referring to the figure
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyPress);
    return () => {
      document.body.addEventListener("keyup", handleKeyPress);
    };
  }, []);

  let zInd = 0;

  const handleDragStart = (e) => {
    e.target.style.zIndex = zInd++;
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleDragEnd = (e) => {};

  //Copy Obj

  const handleDragStartCopy = (e) => {
    e.target.style.zIndex = zInd++;
    e.target.style.border = "2px solid red";
    e.target.classList.add("active__figure");
    e.dataTransfer.setData("copyFigure", e.target.id);
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleDragEndCopy = (e) => {
    if (e.dataTransfer.dropEffect === "none") {
      document.getElementById(e.target.id).remove();
    }
    e.target.classList.remove("active__figure");
    e.target.style.position = "absolute";
    e.target.style.left = e.clientX + "px";
    e.target.style.top = e.clientY + "px";
    e.target.style.border = "none";
  };

  //

  const handleOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {};

  const handleDragLeave = (e) => {
    console.log("DELETE OBJECT");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.types[0] === "text/plain") {
      let data = e.dataTransfer.getData("text/plain");
      let findData = document.getElementById(data);
      let clone = findData.cloneNode(true);

      clone.id = Math.random().toString(36).substring(7);
      clone.addEventListener("dragstart", (e) => handleDragStartCopy(e));
      clone.addEventListener("dragend", (e) => handleDragEndCopy(e));

      clone.style.position = "absolute";
      clone.style.left = e.clientX + "px";
      clone.style.top = e.clientY + "px";

      e.target.append(clone);
    }
    e.dataTransfer.getData("copyFigure");
  };

  return (
    <div className="application">
      <div className="application__header">
        <div className="header__name">
          <b>TASK TEST #1</b>
        </div>
      </div>
      <div className="application__content">
        <div className="content__table">
          <div className="columnLeft__name">Object</div>
          <div className="table__columnLeft">
            <span className="columnLeft__listObjs">
              {figures.map((figure) => (
                <div key={figure.id}>
                  <br />
                  <div
                    id={figure.id}
                    draggable={figure.draggable}
                    onDragStart={(e) => handleDragStart(e)}
                    onDragEnd={(e) => handleDragEnd(e)}
                    className={figure.className}
                  />
                </div>
              ))}
            </span>
          </div>
        </div>
        <div className="content__table">
          <div className="columnRight__name">Canvas</div>
          <div
            className="table__columnRight"
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => handleOver(e)}
            onDragEnter={(e) => handleDragEnter(e)}
          ></div>
        </div>
      </div>
      <div className="application__footer">
        <span className="footer__company">
          <b>Task for: </b>Satellite Innovations
        </span>
        <span className="footer__date">
          <b>Date:</b> 07.07.2021
        </span>
      </div>
    </div>
  );
}

export default App;
