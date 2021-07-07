import './App.css';

function App() {
  // const handleClickOnDragStart = (e) => {
  //   const div=e.target;
  //   div.style.position='absolute';
  //   MoveAt(e,div)
  // }
  // const MoveAt = (e,div) => {
  //   div.style.left = e.pageX - div.offsetWidth / 2 + 'px';
  //   div.style.top = e.pageY - div.offsetHeight / 2 + 'px';
  // }


  const handleDragStart=(e)=>{
   
  }

  const handleDragEnd=(e)=>{
    
    const newDiv=e.target.cloneNode(true);
    document.body.append(newDiv);
    newDiv.style.position='absolute';
    newDiv.style.left=e.clientX+'px';
    newDiv.style.top=e.clientY+'px';
  }

  const handleOver=(e)=>{
    e.preventDefault();
  };

  const handleDrop=(e)=>{
    e.preventDefault();
    
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
          <div className="columnLeft__name">
            Object
          </div>
          <div className="table__columnLeft">
          <span className="columnLeft__listObjs">
            <br /><div draggable={true} onDragStart={(e)=>handleDragStart(e)} onDragEnd={(e)=>handleDragEnd(e)} className="columnLeft__listObj listObjs__firstObj"/><br />
            <div  draggable={true} onDragStart={(e)=>handleDragStart(e)} onDragEnd={(e)=>handleDragEnd(e)} className="columnLeft__listObj listObjs__secondObj"/>
          </span>
          </div>
        </div>
        <div className="content__table" onDrop={(e)=>handleDrop(e)} onDragOver={(e)=>handleOver(e)}>
          <div className="columnRight__name">Canvas</div>
          <div className="table__columnRight">
          <span className="columnRight__listObjs"/>
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
