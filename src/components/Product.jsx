import { add,remove } from "../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
const Product=({post})=>{
    const {cart}=useSelector((state)=> state);

    const dispatch=useDispatch();
    const addCart=()=>{
        dispatch(add(post));
    }
    const removeCart=()=>{
        dispatch(remove(post.id));
    }
    return  (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-11 mt-8 ml-4 rounded-xl outline">
<div>
    <p className="text-gray-700 font-semibold text-left text-lg truncate w-40 mt-1">{post.title}</p>
</div>
<div>
    <p className="w-40 font-normal text-gray-700 text-left text-[12px]">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
</div>
<div className="h-[180px]">
    <img src={post.image} className="h-full w-full"/>
</div>
<div className="flex justify-between gap-10 mt-3 items-center w-full">
<div>
    <p className="text-green-600 font-bold">${post.price}</p>
</div>
{
cart.some((p)=> p.id==post.id)?
(<button className="text-gray-800 border-2 border-gray-800 rounded-full font-bold text-[12px] px-3  p-1 hover:bg-gray-700 hover:text-white transition duration-300"  onClick={removeCart}>RemoveItem</button>):(<button className="text-gray-800 border-2 border-gray-800 rounded-full font-bold text-[12px] px-3  p-1 hover:bg-gray-700 hover:text-white transition duration-300" onClick={addCart}>AddToCart</button>)
}  
</div>

    </div>
    );
};
export default Product;