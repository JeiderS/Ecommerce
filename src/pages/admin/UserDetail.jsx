import { useContext } from "react";
import myContext from "../../context/myContext";


const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;

    return (
        <div>
            <div>
                <div className="py-5 flex justify-between items-center">
                    {/* text  */}
                    <h1 className=" text-xl text-indigo-300 font-bold">Todos los usuarios</h1>
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border border-collapse sm:border-separate border-indigo-100 text-indigo-400" >
                        <tbody>
                            <tr>
                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                    S.No.
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                    Nombre
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                    Correo electrónico
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                    Identificador
                                </th>
                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                   Rol
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-indigo-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                    Fecha
                                </th>
                               
                            </tr>
                            {
                                getAllUser.map((value, index) => {
                                    return (
                                        <tr key={index} className="text-indigo-300">
                                            <td
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 ">
                                                {index + 1}
                                            </td>
                                            <td
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                {value.name}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                                                {value.email}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500  cursor-pointer ">
                                                {value.uid}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500  cursor-pointer ">
                                                {value.role}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-indigo-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                                                {value.date}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;