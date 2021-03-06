import Todo from './Todo';
import React, { useState } from "react";
import { render } from "react-dom";

interface task{
  value:string ,
  index:number,
  done: boolean,
  deleteTask?:any ,
  addCardDone?:any


}
function Task( props:task) {

  const [style, setStyle] = useState({display: 'none'});

  return  (

    <div  onMouseEnter={e => {
      setStyle({display: 'block'});
    }}
    onMouseLeave={e => {
      setStyle({display: 'none'})
    }}
    className="flex justify-between h-8 items-center py-6 border-b">




    <span className="text-2xl"> {props.value} </span>
    {props.done === false ?
      <div style={style} className="flex space-x-1 items-center">
      <button onClick={()=>props.addCardDone(props.value,props.index)} id='done' className="bg-green-400 w-24 text-2xl" >Done</button>
      <button onClick={()=>props.deleteTask(props.index)} id='delete' className="bg-red-400 w-24 text-2xl" >Delete</button>
      </div>
      : <div className="flex space-x-1 justify-center "/>
    }
    </div>
  );




}
export default Task
