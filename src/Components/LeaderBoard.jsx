import React, { useEffect } from 'react'
import Tiles from './Tiles';
import { motion, AnimatePresence, LayoutGroup} from "framer-motion"

const LeaderBoard = ({top10,nexttop,setNexttop,update,setUpdate}) => {
  //fetch top10
  const newtop10=[
    
    {
    userName:"Ruben",
    uId:"N8yh1y3834-1hifa",
    avatar:"imagelink",
    points:1199,
    position:8
    },
    {
        userName:"Dhwani",
        uId:"N8yh1y3834-1hifa",
        avatar:"imagelink",
        points:1120,
        position:8
    },
    {
    userName:"Shelly",
    uId:"N8yh1y3834-1hifa",
    avatar:"imagelink",
    points:1190,
    position:8
    },
    {
    userName:"Abijith",
    uId:"N8yh1y3834-1hifa",
    avatar:"imagelink",
    points:1120,
    position:8
    },
  ];  
  
  useEffect( () => {
    if(update==0){
        setNexttop(top10);
        return;
    }
    if(top10==newtop10)setNexttop(top10);
    else setNexttop(newtop10); 
  },[update])
// grid grid-cols-1 
  return (
    <AnimatePresence>
      <LayoutGroup>
        <motion.ul layout className="bg-slate-900 m-0 p-4 
        
        min-h-screen">
            {nexttop.map((user) => {
            return <Tiles key={user.uId} user={user} />;
            })}
        </motion.ul>
      </LayoutGroup>
      
    </AnimatePresence>
  );
}

export default LeaderBoard
