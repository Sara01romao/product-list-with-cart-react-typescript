import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import styles from './orderConfirmed.module.css'

export function OrderConfirm(){

    return(
      <div>
        <div>
            <div>
                <FaCheckCircle/>
                <h2>Order Confirmed</h2>
            </div>
            
        </div>

        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 pb-0 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div>
                                <FaRegCircleCheck className="text-[#1EA575] mb-5" size={48}/>
                                <h2 className="text-3xl font-bold text-[#260F08]">Order Confirmed</h2>
                                <p className="text-[#87635A] text-base">We hope you enjoy your food!</p>
                            </div>
                            <div className="bg-[#FCF8F6] rounded-lg mt-8 px-3 pt-2">
                                <div className={`${styles.orderConfirmed} h-[270px] overflow-y-auto`}>
                                    <div className="flex gap-4 items-center border-b-2 border-[#F5EEEC] py-4 px-3">
                                        <img className="w-14" src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Delight-Dessert_EXPS_TOHcom23_27515_P2_MD_03_22_4b.jpg" alt="" />
                                        <div className="flex flex-col">
                                            <p className="text-[#260F08] font-medium text-lg">Classic Tiramisu</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[#C73B0F] font-bold">1x</p>
                                                <p className="text-[#87635A]">@ $5.50</p>
                                            </div>
                                        </div>
                                        <p className="mr-0 ml-auto text-[#260F08] text-base font-bold ">$5.50</p>
                                    </div>
                                    
                                    <div className="flex gap-4 items-center border-b-2 border-[#F5EEEC] py-4 px-3">
                                        <img className="w-14" src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Delight-Dessert_EXPS_TOHcom23_27515_P2_MD_03_22_4b.jpg" alt="" />
                                        <div className="flex flex-col">
                                            <p className="text-[#260F08] font-medium text-lg">Classic Tiramisu</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[#C73B0F] font-bold">1x</p>
                                                <p className="text-[#87635A]">@ $5.50</p>
                                            </div>
                                        </div>
                                        <p className="mr-0 ml-auto text-[#260F08] text-base font-bold ">$5.50</p>
                                    </div>
                                    
                                    <div className="flex gap-4 items-center border-b-2 border-[#F5EEEC] py-4 px-3">
                                        <img className="w-14" src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Delight-Dessert_EXPS_TOHcom23_27515_P2_MD_03_22_4b.jpg" alt="" />
                                        <div className="flex flex-col">
                                            <p className="text-[#260F08] font-medium text-lg">Classic Tiramisu</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[#C73B0F] font-bold">1x</p>
                                                <p className="text-[#87635A]">@ $5.50</p>
                                            </div>
                                        </div>
                                        <p className="mr-0 ml-auto text-[#260F08] text-base font-bold ">$5.50</p>
                                    </div>
                                    
                                    <div className="flex gap-4 items-center border-b-2 border-[#F5EEEC] py-4 px-3">
                                        <img className="w-14" src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Delight-Dessert_EXPS_TOHcom23_27515_P2_MD_03_22_4b.jpg" alt="" />
                                        <div className="flex flex-col">
                                            <p className="text-[#260F08] font-medium text-lg">Classic Tiramisu</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[#C73B0F] font-bold">1x</p>
                                                <p className="text-[#87635A]">@ $5.50</p>
                                            </div>
                                        </div>
                                        <p className="mr-0 ml-auto text-[#260F08] text-base font-bold ">$5.50</p>
                                    </div>
                                    
                                </div>
                                
                                <div className="flex items-center justify-between mt-7 pb-6">
                                    <p className="pl-3">Order Total</p>
                                    <h2 className="text-[#260F08] font-bold text-3xl">$46.50</h2>
                                </div>
                            </div>

                            <button className="bg-[#C73B0F] text-white font-medium w-full mt-8 h-12 rounded-full mb-3 hover:bg-[#952C0B] duration-300">Start New Order</button>

                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

    
    )
}