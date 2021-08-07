import { useState } from 'react';
import Task from './Task'



function Todo() {


  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
  }
  const [input, setInput] = useState<string>("");
  const [dataArr, setData] = useState<string[]>([]); //todo
  const [doneArr, setDone] = useState<string[]>([]); // done
  //add TODO
  const addCardTodo =() => {
    setData((strings) => [input,...strings]);
  }

  const deleteTask =(index:number)=>{
    setData((strings) => [...strings.slice(0, index), ...strings.slice(index + 1)]);
  }
  const addCardDone =(a:string[],index:number) => {
    setData((strings) => [...strings.slice(0, index), ...strings.slice(index + 1)]);  //ลบจาก todo


    setDone([...a,...doneArr]);   // เพิ่มลง done
  }

  return <div className='mx-auto max-w-4xl'>

  {/* task input and add button */}
    <div className='flex space-x-1'>
  <input onChange={ev => setInput(ev.target.value)} className='border border-gray-400 w-full text-2xl'
  onKeyDown={onKeyDownCallback} ></input>


  <button onClick={addCardTodo}   className='border border-gray-400 w-8 font-bold'>+</button>



    </div>
    <div>
  {
    dataArr.map(  (name,index)=>(    <Task value = {name} deleteTask = {deleteTask} addCardDone = {addCardDone} index = {index} done={false}></Task>   ))
  }
    </div>
<div>
</div>
    <div className='bg-green-500 '>
  {
    doneArr.map(  (name,index)=>(    <Task value = {name}  index = {index} done={true}></Task>   ))
  }
    </div>
        </div>




}



export default Todo
