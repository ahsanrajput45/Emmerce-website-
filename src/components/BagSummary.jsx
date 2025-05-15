

import { useSelector } from "react-redux"


const BagSummary=()=>{
  const Bagitems =useSelector((store)=>store.Bagitems)
  const items=useSelector((store)=>store.items)
   const Bag=useSelector((store)=>store.Bagitems)
     const finalBagitems=items.filter((item)=>{
      const itemindex=Bag.indexOf(item.id)
      return itemindex>=0


     })

const Convenience_Fee=99;
let totalitems=Bagitems.length;
let totalMRP=0;
let totalDiscount=0;


finalBagitems.map((item)=>{

   totalMRP =item.original_price;
   totalDiscount=item.original_price-item.current_price;

})
let finalPayment=totalMRP-totalDiscount+Convenience_Fee;

  return <div className="bagsummary"><div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalitems} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">{Convenience_Fee}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
 </div> 
}
export default BagSummary;