
import BagSummary from '../components/BagSummary'
import { useSelector } from 'react-redux'

import Bagitem from '../components/Bagitem'

const Bag=()=>{

const items=useSelector((store)=>store.items)
     const Bag=useSelector((store)=>store.Bagitems)

     const finalBagitems=items.filter((item)=>{
      const itemindex=Bag.indexOf(item.id)
      return itemindex>=0


     })

  return  <main>
 <div className="bag-page">
<div className="bag-items-container">
  {finalBagitems.map((item)=>(<Bagitem item={item}></Bagitem>))}
  
  </div>
<BagSummary></BagSummary>



 </div>
  </main>

  
}

export default Bag;