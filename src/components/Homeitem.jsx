// import itemimage from "/images/2.jpg"
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { addtobag, removetobag } from "../store/features/BagSlice";
// import { removetobag } from "../store/features/BagSlice";
// import Home from "../routes/Home";
const Homeitem = ({item}) => {
  const Bagitems =useSelector((store)=>store.Bagitems)
  // console.log(Bagitems)

  const elements=Bagitems.indexOf(item.id)>=0

  // console.log(elements,item.id)
  
    const dispatch=useDispatch()
    const handleAddtobag=()=>{
dispatch(addtobag(item.id))
    }
      const removefrombag=()=>{
dispatch(removetobag(item.id))
    }

    
  return (
    <div>
        <div className="item-container">
          
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
    
      {elements?<button type="button" class="   btn-add-bag btn btn-danger" onClick={removefrombag}><MdDelete />
Remove from Bag</button> :  <button type="button" class="  btn-add-bag btn btn-success" onClick={handleAddtobag}><IoMdAddCircle />
Add to Bag</button>}

    </div>
    </div>
  )
}

export default Homeitem;