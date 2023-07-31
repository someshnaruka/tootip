import React, { useState } from "react";

const Mobile = (props) => {
 const[show,setshow]=useState(false)
 function handleshow(){
    setshow(true);
 }
 function handleleave(){
    setshow(false)
 }
    // const props={
    //     element:props.element,
    // toolText: props.toolText,
    // size:props.size,
    // padding: props.padding,
    // color: props.color,
    // bgColor: props.bgColor,
    // radius: props.radius,
    // tipWidth: props.tipWidth,
    // ArrWidth: props.ArrWidth,
    // arrHeight: props.arrHeight,
    // }
    
console.log('====================================');
console.log(props.size);
console.log('====================================');
  const myComponent = {
    display:"flex",
    position: "absolute",
    left: "50%",
    top: -50,
    backgroundColor: props.bgColor,
    color: props.color,
    borderRadius: props.radius +"px",
    padding: props.padding +"px",
    width: props.tipWidth +"rem",
    fontSize: props.size +"px",
    zIndex: 1,
    whiteSpace: "nowrap",
    transform:"translateX(-50%) translateY(50%)",
    clipPath: `polygon(
        0% 0%, 
        100% 0%, 
        100% calc(100% - 10px),
        calc(50% + 10px) calc(100% - 10px),
        50% 100%,
        calc(50% - 10px) calc(100% - 10px),
        0% calc(100% - 10px)
      )`,

    }

  return (
    <>
      <div className="Mobile">
        <div className="row-1">
          <div className="btn"  onMouseEnter={props.element=="Button 1" ? handleshow :null} onMouseLeave={ handleleave}>
            <button>Button 1</button>
            {props.element=="Button 1" && show && <div className="toottip" style={myComponent}>
             {props.toolText}
            </div>
        }
          </div>
          <div className="btn"  onMouseEnter={props.element=="Button 2" ? handleshow :null} onMouseLeave={ handleleave}>
            <button>Button 2</button>
            {props.element=="Button 2" && show && <div className="toottip" style={myComponent}>
             {props.toolText}
            </div>
        }
          </div>
        </div>
        <div className="row-2">
          <div className="btn"  onMouseEnter={props.element=="Button 3" ? handleshow :null} onMouseLeave={ handleleave}>
            <button>Button 3</button>
            {props.element=="Button 3" && show && <div className="toottip" style={myComponent}>
             {props.toolText}
            </div>
        }
          </div>
        </div>
        <div className="row-3">
          <div className="btn"  onMouseEnter={props.element=="Button 4" ? handleshow :null} onMouseLeave={ handleleave}>
            <button>Buttom 4</button>
            {props.element=="Button 4" && show && <div className="toottip" style={myComponent}>
             <p>{props.toolText}</p>
            </div>
        }
          </div>
          <div className="btn"  onMouseEnter={props.element=="Button 5" ? handleshow :null} onMouseLeave={ handleleave}>
            <button>Button 5</button>
            {props.element=="Button 5" && show && <div className="toottip" style={myComponent}>
             <p>{props.toolText}</p>
            </div>
        }
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
