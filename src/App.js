import { useState } from "react";
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

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleDragEnd = (e) => {};

  const handleOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {};

  const handleDrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text/plain");
    let findData = document.getElementById(data);
    let clone = findData.cloneNode(true);

    clone.style.position = "absolute";
    clone.style.left = e.clientX + "px";
    clone.style.top = e.clientY + "px";
    e.dataTransfer.clearData("text/plain");

    e.target.append(clone);
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
                    onDragStart={(e) => handleDragStart(e, figure.id)}
                    onDragEnd={(e) => handleDragEnd(e)}
                    className={figure.className}
                  />
                </div>
              ))}
            </span>
          </div>
        </div>
        <div
          className="content__table"
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => handleOver(e)}
          onDragEnter={(e) => handleDragEnter(e)}
        >
          <div className="columnRight__name">Canvas</div>
          <div className="table__columnRight">
            <div className="columnRight__listObjs" />
          </div>
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
