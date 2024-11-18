
import { useState } from "react";
import { products, ProductType } from "../../data/product";

import { FaPlus } from "react-icons/fa";
import { GrFormSubtract } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { LiaCartPlusSolid } from "react-icons/lia";
import styles from './home.module.css'
import { OrderConfirm } from "../../components/orderConfirmed";



interface ProductProps{
  id:number;
  name: string;
  price: number;
  quantity?: number  ;
}


 export function Home(){

    const [cart, setCart] = useState <ProductProps[]>([]);
    
    function handleAddCart(item:ProductProps){
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
      
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity = 
          (updatedCart[existingItemIndex].quantity || 0) + 1;
    
        setCart(updatedCart); 
      } else {
        
        setCart([...cart, { ...item, quantity: 1 }]); 
      }

    }
    
    function handleRemove(id:number){
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)

    }

    function handleDecrement(id: number) {
      const updatedCart = cart.map(item => {
        if (item.id === id && (item.quantity || 0) > 0) {
          return {
            ...item,
            quantity: (item.quantity || 0) - 1, 
          };
        }
        return item;
      })
      .filter(item => (item.quantity || 0) > 0); 
      
      setCart(updatedCart);
    }
    
  
   
    return(
    <>
      <div className=" max-w-full lg:max-w-screen-xl h-auto mx-auto flex max-[1000px]:flex-wrap gap-8 px-5  mt-16 items-center lg:items-start justify-center">

        <div className=" m-auto w-4/5 min-[1000px]:w-2/3">
          <h1 className="text-3xl font-bold  text-[#260F08] mb-8">
            Desserts
          </h1>
          <div className="border flex gap-x-6 gap-y-8 flex-wrap items-center justify-center min-[1206px]:justify-start m-auto">
              
             {products.map((product:ProductType) =>(

                <div key={product.id}>
                  <div className="relative">
                      <img src={`/assets/${product.img}`} alt="doce" className={`${cart.some(item => item.id === product.id)?'border-[#C73B0F] border-2 rounded-lg' :'border-0'}`} />

                      { cart.some(item => item.id === product.id)? (
                          <div className="px-6 h-12 w-52 m-auto absolute bottom-[-20px] right-0 left-0 right bg-[#C73B0F] flex justify-between items-center rounded-full ">
                            <button onClick={() => handleDecrement(product.id)} className="group border-2 p-1 hover:bg-white rounded-full  duration-300">
                              <GrFormSubtract size={14} className="text-white  group-hover:text-[#C73B0F]" />
                            </button>

                            <p className="text-white">{cart.find(item => item.id === product.id)?.quantity || 0}</p>

                            <button onClick={() => handleAddCart(product)} className="group border-2 p-1 hover:bg-white rounded-full  duration-300">
                                <FaPlus size={14} className="text-white  group-hover:text-[#C73B0F]" />

                            </button>
                          </div>
                        
                        )
                        : 
                        (
                          <button onClick={() => handleAddCart(product)} className=" group px-6 h-12 absolute bottom-[-20px] right-0 left-0 w-52 m-auto bg-white border-2 border-rose-[#AD8A85] flex items-center justify-center gap-5 rounded-full text-[#260F08] hover:bg-[#C73B0F] hover:text-white transition ease-in-out duration-300  ">

                          <LiaCartPlusSolid size={25} className="text-[#C73B0F]  group-hover:text-white"/>
                          Add to Cart
                        </button>
                          
                        )
                      
                      }

                  </div>

                  <div className="mt-8">
                    <p className="text-[#87635A]">{product.type}</p>
                    <h4 className="text-[#260F08] text-lg font-medium">{product.name}</h4>
                    <p className="text-[#C73B0F]  text-lg font-medium">${product.price.toFixed(2)}</p>
                  </div>
                </div>

             ))}

              
             
          </div>
        </div>

        <div className=" border  lg:max-w-md max-[1000px]:w-4/5 p-6 bg-white rounded-xl ">
           <h3 className="text-[#C73B0F] w-full font-bold  text-2xl mb-6 " >Your Cart (7)</h3>
            
            {cart.length > 0 ? 
               <div className="">
                  <div className={`${styles.listCart} flex flex-col overflow-y-auto max-h-[270px]  pr-2 `}>
                       
                     {cart.map((item => (

                            <div key={item.id} className="flex justify-between items-center border-b-2 border-[#F5EEEC] py-4 ">
                              <div>
                                  <p className="mb-2 text-[#260F08] text-base font-medium">{item.name}</p>
                                  <div className="flex items-center gap-2">
                                    <p className="text-[#C73B0F] font-medium">{item.quantity}x</p>
                                    <p className="text-[#87635A]">@ ${item.price.toFixed(2)}</p>
                                    <p className="text-[#87635A] font-medium">${item.quantity &&  (item.price * item.quantity).toFixed(2)}</p>
                                  </div>
                              </div>

                              <button onClick={()=> handleRemove(item.id)} className="group border-2 rounded-full border-[#AD8A85] hover:border-[#260F08] duration-300 group-hover:duration-300">
                                  <IoClose size={20} className="text-[#AD8A85] group-hover:text-[#260F08] duration-300 group-hover:duration-300 "/>
                              </button>
                              
                            </div>
                     )))
                        

                     }
                    
    
                  </div>
    
                  <div>
                      <div className="flex justify-between items-center mt-6">
                        <p>Order Total</p>
                        <h3 className="text-[#260F08] text-3xl font-bold">$46.50</h3>
                      </div>
    
                      <div className="mt-6 px-2 flex items-center gap-2 justify-center bg-[#FCF8F6] py-4 rounded-lg">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.25 17.75H11.375C11.0435 17.75 10.7255 17.6183 10.4911 17.3839C10.2567 17.1495 10.125 16.8315 10.125 16.5V9.625H13.875C14.2242 9.62506 14.5696 9.55195 14.8888 9.4104C15.208 9.26884 15.4941 9.06198 15.7285 8.80313C15.9629 8.54429 16.1405 8.2392 16.2498 7.90754C16.3591 7.57588 16.3977 7.225 16.3631 6.8775C16.2793 6.24532 15.9656 5.66615 15.4818 5.25064C14.9981 4.83513 14.3782 4.6124 13.7406 4.625H12.7512L12.6406 4.13812C12.2825 2.56 10.7694 1.5 8.875 1.5C8.15969 1.50234 7.45987 1.70854 6.85758 2.09443C6.25528 2.48031 5.77547 3.0299 5.47437 3.67875L5.28125 4.09562L4.74187 4.02437C4.66186 4.01103 4.58107 4.00288 4.5 4C3.83696 4 3.20107 4.26339 2.73223 4.73223C2.26339 5.20107 2 5.83696 2 6.5C2 7.16304 2.26339 7.79893 2.73223 8.26777C3.20107 8.73661 3.83696 9 4.5 9V10.25C3.50544 10.25 2.55161 9.85491 1.84835 9.15165C1.14509 8.44839 0.75 7.49456 0.75 6.5C0.75 5.50544 1.14509 4.55161 1.84835 3.84835C2.55161 3.14509 3.50544 2.75 4.5 2.75L4.54937 2.75062C4.9892 1.99234 5.61997 1.36249 6.37889 0.923764C7.1378 0.485037 7.9984 0.252741 8.875 0.25C11.1744 0.25 13.0575 1.48625 13.72 3.375H13.7406C14.6886 3.36443 15.6071 3.70375 16.3206 4.32805C17.034 4.95234 17.4922 5.81777 17.6075 6.75875C17.6586 7.27963 17.6001 7.80543 17.4358 8.30235C17.2715 8.79926 17.005 9.25628 16.6534 9.64399C16.3018 10.0317 15.873 10.3415 15.3945 10.5536C14.916 10.7656 14.3984 10.8751 13.875 10.875H11.375V16.5H13.25V17.75Z" fill="#1EA575"/>
                        </svg>
    
                        <p className="">This is a <strong>carbon-neutral</strong> delivery</p>
                      </div>
                      <button className="font-medium bg-[#C73B0F] text-white mt-6 w-full p-4 rounded-full hover:bg-[#952C0B] duration-300">Confirm Order</button>
                  </div>
    
               </div>
               :
               <div className="flex flex-col items-center justify-center my-6">
                  <svg width="122" height="102" viewBox="0 0 122 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.15" d="M5.43604 97.4062C5.43604 98.4671 10.0717 99.4845 18.3233 100.235C26.5749 100.985 37.7665 101.406 49.436 101.406C61.1056 101.406 72.2971 100.985 80.5487 100.235C88.8003 99.4845 93.436 98.4671 93.436 97.4062C93.436 96.3454 88.8003 95.328 80.5487 94.5778C72.2971 93.8277 61.1056 93.4062 49.436 93.4062C37.7665 93.4062 26.5749 93.8277 18.3233 94.5778C10.0717 95.328 5.43604 96.3454 5.43604 97.4062Z" fill="#260F08"/>
                    <path d="M116.983 11.2196L69.8359 16.9796L74.1559 52.3396L118.929 46.8729C119.242 46.8367 119.544 46.7387 119.819 46.5845C120.093 46.4304 120.334 46.2232 120.528 45.975C120.721 45.7269 120.863 45.4427 120.946 45.139C121.029 44.8354 121.05 44.5183 121.009 44.2063L116.983 11.2196Z" fill="#87635A"/>
                    <path d="M71.5615 31.1422L118.708 25.3876L120.143 37.1662L73.0015 42.9236L71.5615 31.1422Z" fill="#AD8A85"/>
                    <path d="M82.6359 23.7797C82.5496 23.1561 82.2217 22.5913 81.7228 22.2073C81.224 21.8232 80.5942 21.6504 79.9693 21.7263C79.659 21.7658 79.3596 21.8662 79.0883 22.0217C78.8169 22.1773 78.579 22.385 78.3882 22.6328C78.1974 22.8806 78.0574 23.1637 77.9764 23.4658C77.8953 23.7678 77.8748 24.083 77.9159 24.393L78.2093 26.7397C78.2447 27.6346 77.9427 28.5101 77.3633 29.193C76.7838 29.8758 75.969 30.3162 75.0803 30.4268C74.1916 30.5375 73.2937 30.3104 72.5645 29.7905C71.8352 29.2707 71.3278 28.4959 71.1426 27.6197L69.8359 16.953L84.3159 0.0730139C103.569 -0.620319 118.449 3.67301 119.329 10.873L120.609 21.4063C120.632 21.5856 120.612 21.7677 120.553 21.9383C120.493 22.1089 120.395 22.2635 120.266 22.3899C120.137 22.5164 119.981 22.6114 119.809 22.6674C119.637 22.7234 119.455 22.739 119.276 22.713C118.292 22.526 117.394 22.0291 116.712 21.295C116.031 20.5609 115.603 19.6281 115.489 18.633C115.451 18.3231 115.352 18.0238 115.197 17.7522C115.043 17.4806 114.837 17.2421 114.591 17.0502C114.344 16.8582 114.062 16.7168 113.761 16.6337C113.46 16.5507 113.146 16.5278 112.836 16.5663C112.21 16.6441 111.641 16.9674 111.253 17.465C111.061 17.7114 110.92 17.9931 110.837 18.2942C110.754 18.5953 110.731 18.9098 110.769 19.2197L111.063 21.5663C111.101 21.8763 111.078 22.1907 110.995 22.4918C110.912 22.7929 110.771 23.0746 110.579 23.321C110.387 23.5674 110.148 23.7736 109.877 23.9278C109.605 24.082 109.306 24.1812 108.996 24.2197C108.686 24.2582 108.372 24.2353 108.07 24.1523C107.769 24.0693 107.488 23.9278 107.241 23.7359C106.995 23.544 106.789 23.3054 106.635 23.0338C106.48 22.7622 106.381 22.4629 106.343 22.153C106.306 21.8431 106.208 21.5435 106.056 21.2712C105.903 20.9989 105.699 20.7594 105.453 20.5663C105.208 20.3731 104.927 20.2301 104.627 20.1455C104.327 20.0609 104.013 20.0362 103.703 20.073C103.393 20.1098 103.093 20.2072 102.821 20.3598C102.549 20.5124 102.309 20.7171 102.116 20.9622C101.726 21.4573 101.548 22.0871 101.623 22.713L101.916 25.0863C102.068 26.3382 101.717 27.5991 100.939 28.5918C100.161 29.5845 99.0211 30.2276 97.7693 30.3797C96.5174 30.5317 95.2565 30.1803 94.2638 29.4026C93.2711 28.625 92.628 27.4848 92.4759 26.233L92.0493 22.6863C92.0133 22.3746 91.9151 22.0733 91.7606 21.8002C91.6061 21.5271 91.3984 21.2877 91.1498 21.0962C90.9012 20.9048 90.6167 20.7652 90.3131 20.6856C90.0096 20.606 89.6932 20.5882 89.3826 20.633C88.7541 20.713 88.1828 21.0382 87.7931 21.5377C87.4035 22.0373 87.2271 22.6706 87.3026 23.2997L87.4626 24.473C87.5404 25.0989 87.3664 25.7301 86.9788 26.2277C86.5912 26.7253 86.0219 27.0486 85.3959 27.1263C84.77 27.2041 84.1388 27.0301 83.6412 26.6425C83.1437 26.255 82.8204 25.6856 82.7426 25.0597L82.6359 23.7797Z" fill="#CAAFA7"/>
                    <path d="M78.0762 15.9663L112.263 11.8063" stroke="white" stroke-width="0.973958" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.44918 38.793C3.48918 47.273 21.1958 56.233 43.9158 58.7396C66.6358 61.2463 85.9958 56.5796 86.9558 48.073L83.0092 83.5663C82.0492 92.0463 62.7692 96.8996 39.9692 94.233C17.1692 91.5663 -0.537483 82.7396 0.422517 74.1796L4.44918 38.793Z" fill="#87635A"/>
                    <path d="M2.82274 52.953C1.86274 61.4063 19.5694 70.393 42.3961 72.9797C65.2227 75.5663 84.4494 70.793 85.4094 62.313L84.0761 74.0997C83.1161 82.5797 63.8361 87.433 41.0361 84.7663C18.2361 82.0997 0.529411 73.2197 1.48941 64.7397L2.82274 52.953Z" fill="#AD8A85"/>
                    <path d="M57.8359 29.7796C54.5292 29.1129 51.0626 28.5529 47.4892 28.1529C23.4892 25.4862 3.0359 30.0462 2.1559 38.5262L0.0225696 57.4062C-0.0299591 57.8702 0.00941894 58.3401 0.138455 58.7888C0.267492 59.2376 0.48366 59.6566 0.774616 60.0218C1.36223 60.7595 2.2188 61.2335 3.1559 61.3396C4.093 61.4457 5.03386 61.1751 5.7715 60.5875C6.50915 59.9999 6.98315 59.1433 7.08924 58.2062C7.12014 57.7234 7.24877 57.2519 7.46733 56.8203C7.68589 56.3887 7.98982 56.0059 8.3607 55.6952C8.73159 55.3846 9.16169 55.1524 9.62495 55.0129C10.0882 54.8734 10.575 54.8295 11.0557 54.8837C11.5365 54.9379 12.0012 55.0892 12.4218 55.3284C12.8423 55.5675 13.21 55.8896 13.5023 56.2751C13.7947 56.6606 14.0057 57.1014 14.1227 57.5709C14.2396 58.0403 14.26 58.5287 14.1826 59.0062L13.3826 66.0996C13.2058 67.6626 13.6571 69.2318 14.6373 70.462C15.6175 71.6923 17.0462 72.4828 18.6092 72.6596C20.1722 72.8364 21.7415 72.385 22.9717 71.4049C24.202 70.4247 24.9924 68.9959 25.1692 67.4329C25.2753 66.4958 25.7493 65.6392 26.487 65.0516C27.2246 64.464 28.1655 64.1935 29.1026 64.2996C30.0397 64.4057 30.8962 64.8797 31.4839 65.6173C32.0715 66.355 32.342 67.2958 32.2359 68.2329L31.9692 70.5796C31.8978 71.5006 32.1858 72.4136 32.773 73.1268C33.3601 73.8401 34.2006 74.2983 35.1182 74.4052C36.0358 74.5122 36.9592 74.2596 37.6946 73.7004C38.43 73.1413 38.9203 72.319 39.0626 71.4062L39.1959 70.2062C39.3762 68.6432 40.1701 67.2159 41.4029 66.2382C42.6356 65.2605 44.2062 64.8126 45.7692 64.9929C47.3322 65.1733 48.7596 65.9671 49.7373 67.1999C50.715 68.4326 51.1629 70.0032 50.9826 71.5662L50.5826 75.0862C50.5111 76.0073 50.7992 76.9202 51.3863 77.6335C51.9734 78.3468 52.8139 78.805 53.7316 78.9119C54.6492 79.0188 55.5725 78.7662 56.3079 78.2071C57.0434 77.6479 57.5336 76.8257 57.6759 75.9129L58.6092 67.6462C58.6734 67.3587 58.8434 67.1057 59.0855 66.9377C59.3276 66.7698 59.624 66.699 59.9159 66.7396C60.0718 66.7525 60.2234 66.7972 60.3614 66.8709C60.4993 66.9447 60.6208 67.0458 60.7182 67.1682C60.8156 67.2906 60.887 67.4317 60.9278 67.5827C60.9687 67.7337 60.9783 67.8914 60.9559 68.0462C60.827 69.5882 61.3042 71.1196 62.2861 72.3155C63.268 73.5113 64.6774 74.2773 66.2149 74.4508C67.7525 74.6244 69.2971 74.1918 70.5209 73.2449C71.7447 72.298 72.5512 70.9115 72.7692 69.3796L73.3026 64.6596C73.4087 63.7225 73.8827 62.8659 74.6203 62.2783C75.3579 61.6907 76.2988 61.4202 77.2359 61.5262C78.173 61.6323 79.0296 62.1063 79.6172 62.844C80.2048 63.5816 80.4753 64.5225 80.3692 65.4596C80.2978 66.3806 80.5858 67.2936 81.173 68.0068C81.7601 68.7201 82.6006 69.1783 83.5182 69.2852C84.4358 69.3922 85.3592 69.1396 86.0946 68.5804C86.83 68.0213 87.3203 67.1991 87.4626 66.2862L89.2492 50.7396C89.2902 50.4275 89.2687 50.1105 89.186 49.8068C89.1033 49.5031 88.9611 49.219 88.7675 48.9708C88.5739 48.7226 88.3329 48.5155 88.0586 48.3613C87.7842 48.2072 87.4819 48.1091 87.1692 48.0729L41.1426 42.7396L57.8359 29.7796Z" fill="#CAAFA7"/>
                    <path d="M56.1559 44.6597L57.8359 29.7797L41.0093 42.953L56.1559 44.6597Z" fill="#87635A"/>
                    <path d="M6.79591 39.0596C6.12925 44.9262 23.0359 51.6462 44.5292 54.0996C59.3026 55.7796 72.3959 55.0062 79.3826 52.4462" stroke="white" stroke-width="0.973958" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                  <p className="my-4 text-[#87635A] font-bold">Your added items will appear here</p>

              </div>
            }

          
          
          

        </div>
          
      </div>

      {/* <OrderConfirm/> */}
    </>
        
    )
 }