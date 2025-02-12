import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";


const ProductDetail = () => {

    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

    const navigate = useNavigate();

    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', id))
            toast.success('Producto eliminado exitosamente')
            getAllProductFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                
                <h1 className=" text-xl text-indigo-300 font-bold">Productos</h1>
                <Link to={"/addproduct"}>
                    <button className="px-5 py-2 bg-indigo-50 border border-indigo-100 rounded-lg" >Agregar Producto</button>
                </Link>
            </div>

            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>

            
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-indigo-100 text-indigo-400" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">Imagen</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">Nombre Producto</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">Precio</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">Categoria</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">Fecha</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">Accion</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">Accion</th>
                        </tr>
                        {getAllProduct.map((item, index) => {
                            const { id, title, price, category, date, productImageUrl } = item
                            return (
                                <tr key={index} className="text-indigo-300">
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 ">
                                        {index + 1}.
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        <div className="flex justify-center">
                                            <img className="w-20 " src={productImageUrl} alt="" />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {title}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        ${price}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {category}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {date}
                                    </td>
                                    <td onClick={() => navigate(`/updateproduct/${id}`)}
                                        className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                                        Editar
                                    </td>
                                    <td onClick={()=> deleteProduct(id)}
                                        className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                                        Eliminar
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;