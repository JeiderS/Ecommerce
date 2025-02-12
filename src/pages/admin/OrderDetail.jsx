import { useContext } from "react";
import myContext from "../../context/myContext";


const OrderDetail = () => {

    const context = useContext(myContext);
    const { getAllOrder, deleteProduct } = context;

    return (
        <div>
            <div>
                <div className="py-5">
                    {/* text  */}
                    <h1 className=" text-xl text-indigo-300 font-bold">Todo los pedido</h1>
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border border-collapse sm:border-separate border-indigo-100 text-indigo-400" >
                        <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                    S.No.
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    ID de pedido
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Imagen
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Nombre Producto 
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Categoria
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Precio
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Cantidad
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Precio total
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Estado
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Nombre
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    DIRECCIÓN
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    código PIN
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Número de teléfono
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Correo electrónico
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Fecha
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100">
                                    Acción
                                </th>


                            </tr>
                            {getAllOrder.map((order) => {
                                console.log(order)
                                return (
                                    <>
                                        {order.cartItems.map((item, index) => {
                                            const { id, productImageUrl, title, category, price, quantity } = item
                                            return (
                                                <tr key={index} className="text-indigo-300">
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 ">
                                                        {index + 1}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 ">
                                                        {id}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        <img src={productImageUrl} alt="img" />
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {title}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {category}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        ${price}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {quantity}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        ${price * quantity}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l text-green-600  first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.status}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.name}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.address}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.pincode}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.addressInfo.mobileNumber}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 ">
                                                        {order.email}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                        {order.date}
                                                    </td>
                                                    <td onClick={()=> deleteProduct(order.id)}
                                                        className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                                                        Eliminar
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;