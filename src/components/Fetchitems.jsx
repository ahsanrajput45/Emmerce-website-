import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {addinitialItems}  from "../store/features/itemslice";

import { markfetchdone,markfetchstarting,markfetchfinished } from "../store/features/loadState";
const Fetchitems =()=>{
  const fetchstatus=useSelector((state)=>state.fetchstatus)
  console.log("Fetch STATUS ",fetchstatus)
  const dispatch  =useDispatch()
  useEffect(()=>{
    if(fetchstatus.fetchdone){return }
    
      const controller = new AbortController();
  
dispatch(markfetchstarting())

     fetch('http://localhost:8080/items')
  .then(res => res.json())
  .then((data)=>{
  
   dispatch(markfetchdone())

    
   dispatch(markfetchfinished())
  console.log("dispatch ho gya ",data.items[0])
   dispatch(addinitialItems(data.items[0]))
   } )
  
  return ()=>{
    controller.abort();
  }
},[fetchstatus]);


return <>
<div></div></>

}
export default Fetchitems;