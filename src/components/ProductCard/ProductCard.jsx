// datosProducto 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import myContext from "../../context/myContext";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";


const ProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        
        dispatch(addToCart(item));
        toast.success("Añadido al carrito exitosamente")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Eliminado del carrito exitosamente")
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    return (
        <div className="mt-10">
            
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Productos más vendidos</h1>
            </div>
            


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0,8).map((item, index) => {
                            const { id, title, price,productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> navigate(`/productinfo/${id}`)}
                                            className="lg:h-80  h-96 w-full"
                                            src={productImageUrl}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ${price}
                                            </h1>
                                            <div className="flex justify-center ">
                                                {
                                                    cartItems.some((p) => p.id === item.id)
                                                    
                                                    ?
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                            className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                            Eliminar Del Carrito
                                                    </button>
                                                    :
                                                    <button onClick={() => addCart(item)}
                                                        className=" bg-indigo-500 hover:bg-indigo-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Agregar al Carrito
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}


export default ProductCard;