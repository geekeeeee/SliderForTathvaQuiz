import React, { useState,useEffect } from 'react'
import Tiless from './Tiles.jsx'
import { motion, AnimatePresence} from "framer-motion"

const user=
{
    userName:"Dhwani",
    uId:"N8yh1y3834-1hifa",
    avatar:"imagelink",
    points:1020,
    position:8
};

const Shuffler = () => {
    const top10=[
            {
                userName:"Dhwani",
                uId:"1",
                avatar:"imagelink",
                points:1020,
                position:8
            },
            {
            userName:"Shelly",
            uId:"2",
            avatar:"imagelink",
            points:920,
            position:8
            },
            {
            userName:"Abijith",
            uId:"3",
            avatar:"imagelink",
            points:1120,
            position:8
            },
            {
            userName:"Ruben",
            uId:"4",
            avatar:"imagelink",
            points:1020,
            position:8
            }
    ];  
        
    const newtop10=[
        
        {
            userName:"Dhwani",
            uId:"1",
            avatar:"imagelink",
            points:100,
            position:8
        },
        {
        userName:"Philip",
        uId:"100",
        avatar:"imagelink",
        points:100,
        position:8
        },
        {
        userName:"Abijith",
        uId:"3",
        avatar:"imagelink",
        points:120,
        position:8
        },
        {
        userName:"Shelly",
        uId:"2",
        avatar:"imagelink",
        points:20,
        position:8
        }
    ];  

    const [update, setUpdate]=useState(0);
    const [currtop, setCurrtop]=useState([]);
    useEffect( ()=> {
        if(update%2==0){
            setCurrtop(top10);
        }
        else setCurrtop(newtop10)

        console.log(currtop);
    },[update])

    return (
        <div className="min-h-screen min-w-h-screen bg-slate-800 text-white flex flex-col justify-center items-center">
            {/* <Tiless user={user}/>  */}
            <button onClick={()=>{setUpdate(!update)}} className="rounded-full bg-red-500 w-[200px] text-slate-950">Here</button>
            <ul className="relative p-5 flex-col justify-center items-center">
                <AnimatePresence>
                    {
                        currtop.map((user)=>{
                            return(
                            <Tiless key={user.uId} user={user}/>);
                        })
                    }
                </AnimatePresence>
            </ul>
        </div>
    );
}

export default Shuffler
