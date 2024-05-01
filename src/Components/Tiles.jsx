import React, {useEffect, useState} from 'react'
import Avatar from '@mui/joy/Avatar';
import {red} from '@mui/material/colors';
import { motion, AnimatePresence} from "framer-motion"

const Tiless = ({user}) => {
    const [points,setPoints]= useState(0);
    const [randomColor, setRandomColor] = useState('');

    useEffect(() => {
        setPoints(user.points);
        const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        setRandomColor(colors[randomIndex]);
    },[user]);


    return (
        <motion.li key={user.uId}
        layout 
        className={`w-[600px] p-2 rounded-full drop-shadow-2xl m-5 mb-4 h-[50px] flex items-center relative overflow-hidden`}>
            <div className="flex items-center flex-row h-full absolute left-0 w-full p-2 ">
                <Avatar 
                className="m-2">
                    {user.userName[0]}
                
                </Avatar>
                <div className="flex flex-col text-sm font-bold mx-2">
                    <span className="name">{user.userName}</span>
                </div>
            </div>

            <motion.div
                className={`${randomColor} w-full absolute top-0 right-0 h-full -z-10 origin-left rounded-full`}
                initial={{
                    scaleX: 0
                }}
                animate={{
                    scaleX: points / 1200
                }}
                transition={{
                    duration: 1,
                    ease: 'backOut'
                }}
            >
            </motion.div>
            <div className="text-lg font-bold tracking-tight text-gray-900 dark:text-white absolute right-0 mx-5">
                {user.points}
            </div>
        </motion.li>
    );
}

export default Tiless;