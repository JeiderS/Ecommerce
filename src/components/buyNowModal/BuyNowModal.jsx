/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-indigo-600 border border-transparent dark:border-gray-700 hover:border-indigo-500 hover:text-indigo-700 hover:bg-indigo-100 rounded-xl"
            >
                Comprar ahora
            </Button>
            <Dialog open={open} handler={handleOpen} className=" bg-indigo-50">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Introduce tu nombre'
                            className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-full rounded-md outline-none text-indigo-600 placeholder-indigo-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Introduce tu dirección'
                            className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-full rounded-md outline-none text-indigo-600 placeholder-indigo-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })
                            }}
                            placeholder='Introduce tu código PIN'
                            className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-full rounded-md outline-none text-indigo-600 text-indigo-600 placeholder-indigo-300'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })
                            }}
                            placeholder='Introduce tu número de móvil'
                            className='bg-indigo-50 border border-indigo-200 px-2 py-2 w-full rounded-md outline-none text-indigo-600 placeholder-indigo-300'
                        />
                    </div>

                    <div className="">
                        <Button

                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-indigo-600 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Comprar ahora
                        </Button>
                    </div>

                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;