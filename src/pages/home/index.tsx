
 export function Home(){
    return(

      <div className="border border-sky-500 max-w-screen-xl h-screen mx-auto flex items-start">

        <div>
          <h1 className="text-3xl font-bold underline text-red-400">
            Desserts
          </h1>

          <div>
              <div>
                  <img src="./doce.png" alt="" />


                 <button className="flex items-center">
                   <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_72_58)">
                      <path d="M6.58337 18.75C7.27373 18.75 7.83337 18.1904 7.83337 17.5C7.83337 16.8096 7.27373 16.25 6.58337 16.25C5.89302 16.25 5.33337 16.8096 5.33337 17.5C5.33337 18.1904 5.89302 18.75 6.58337 18.75Z" fill="#C73B0F"/>
                      <path d="M15.3334 18.75C16.0237 18.75 16.5834 18.1904 16.5834 17.5C16.5834 16.8096 16.0237 16.25 15.3334 16.25C14.643 16.25 14.0834 16.8096 14.0834 17.5C14.0834 18.1904 14.643 18.75 15.3334 18.75Z" fill="#C73B0F"/>
                      <path d="M3.44587 1.7525C3.41757 1.61087 3.34108 1.48341 3.22941 1.3918C3.11775 1.3002 2.97781 1.25009 2.83337 1.25H0.333374V2.5H2.32087L4.72087 14.4975C4.74918 14.6391 4.82567 14.7666 4.93733 14.8582C5.049 14.9498 5.18894 14.9999 5.33337 15H16.5834V13.75H5.84587L5.34587 11.25H16.5834C16.7256 11.25 16.8635 11.2015 16.9744 11.1125C17.0853 11.0235 17.1625 10.8994 17.1934 10.7606L18.6109 4.375H17.3315L16.0821 10H5.09587L3.44587 1.7525Z" fill="#C73B0F"/>
                      <path d="M11.5834 3.75V1.25H10.3334V3.75H7.83337V5H10.3334V7.5H11.5834V5H14.0834V3.75H11.5834Z" fill="#C73B0F"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_72_58">
                      <rect width="20" height="20" fill="white" transform="translate(0.333374)"/>
                      </clipPath>
                      </defs>
                    </svg>

                    Add to Cart
                 </button>

                 <div className="bg-orange-800 flex justify-between items-center rounded-full h-10">
                   <button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0001 2.5C14.1251 2.5 17.5001 5.875 17.5001 10C17.5001 14.125 14.1251 17.5 10.0001 17.5C5.87512 17.5 2.50012 14.125 2.50012 10C2.50012 5.875 5.87512 2.5 10.0001 2.5ZM10.0001 1.25C5.18762 1.25 1.25012 5.1875 1.25012 10C1.25012 14.8125 5.18762 18.75 10.0001 18.75C14.8126 18.75 18.7501 14.8125 18.7501 10C18.7501 5.1875 14.8126 1.25 10.0001 1.25Z" fill="white"/>
                      <path d="M5.00012 9.375H15.0001V10.625H5.00012V9.375Z" fill="white"/>
                    </svg>

                   </button>

                   <p>4</p>

                   <button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.0001 2.5C14.1251 2.5 17.5001 5.875 17.5001 10C17.5001 14.125 14.1251 17.5 10.0001 17.5C5.87512 17.5 2.50012 14.125 2.50012 10C2.50012 5.875 5.87512 2.5 10.0001 2.5ZM10.0001 1.25C5.18762 1.25 1.25012 5.1875 1.25012 10C1.25012 14.8125 5.18762 18.75 10.0001 18.75C14.8126 18.75 18.7501 14.8125 18.7501 10C18.7501 5.1875 14.8126 1.25 10.0001 1.25Z" fill="white"/>
                      <path d="M15.0001 9.375H10.6251V5H9.37512V9.375H5.00012V10.625H9.37512V15H10.6251V10.625H15.0001V9.375Z" fill="white"/>
                      </svg>

                   </button>
                 </div>
              </div>

              <div>
                <p className="text-orange-700">Waffle</p>
                <h4>Waffle with Berries</h4>
                <p>$6.50</p>
              </div>
          </div>
        </div>

        <div>
           <h3>Your Cart (7)</h3>

           <div>

           </div>
        </div>
          
      </div>
        
    )
 }