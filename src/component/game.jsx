/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style.css';
import Confetti from 'react-confetti-boom'
import { Message } from 'rsuite';
const GamePlay = () => {

const [ismsg,setIsmsg] = useState("");
const WINNING_COMBINATIONS = [
	[0 ,1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

const handleWin = (array) =>{
    let msg = '';
    WINNING_COMBINATIONS.forEach(element => {
        const [a,b,c] = element;
        console.log((array[a].value) , (array[b].value) ,(array[c].value));
        if((array[a].value === "O") && (array[b].value === "O") && (array[c].value === "O")) {
            console.log("O user Won");
            msg = "Congratulations !! You Win ";
        }
        if((array[a].value === "X") && (array[b].value === "X") && (array[c].value === "X")) {
            console.log("X user Won");
            msg = "Congratulations !! You Win ";
        }
    });
    if(msg)
        setIsmsg(msg);
}

const [gameArray,setGameArray]=useState([])
let array = [
    {id:0,value:""},
    {id:1,value:""},
    {id:2,value:""},
    {id:3,value:""},
    {id:4,value:""},
    {id:5,value:""},
    {id:6,value:""},
    {id:7,value:""},
    {id:8,value:""},
]
const [newarray,setNewArray]=useState(array);


    const handleChange = (data) =>{
        const lastUpdatedData = gameArray[gameArray.length-1];
        const noValue = newarray.filter((ar)=>ar.value !=="");
        const existingRecod = gameArray.filter((ar)=>ar.id===data.id);

        if(noValue.length === 0)
        {
            data.value = "X";
            setGameArray([data]);
        }
        if(lastUpdatedData && existingRecod.length === 0)
        {
            switch (lastUpdatedData.value) {
            case "X":
            data.value = "O";
            break;

            case "O":
            data.value = "X";
            break;
            
            default:
                break;
            }
            setGameArray([data]);
        }
        handleWin(newarray)      
    }

    const handleReset = () =>setNewArray(array)
  return (
    <div>
        <h1 style={{textAlign:"center",color:"white",marginTop:"3rem"}}>Tic Tie Toe GamePlay</h1>
        <div className='box-container'>
            {newarray.map((ar)=>{
                return (
                         <div key={ar.id} className='box-style' onClick={()=>handleChange(ar)}>
                            <p className='fs text-center'> {ar.value}</p>
                            </div>
                        )
            })}
            {ismsg ? <div className="alert alert-success top 0" role="alert">{ismsg}</div>:""}
        </div>
        <br />
        <button type="button" className="btn btn-success text-center" onClick={()=>handleReset()}>Reset The Game</button>
    </div>
  )
}

export default GamePlay