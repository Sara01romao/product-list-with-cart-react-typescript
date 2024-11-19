
export function NotFound(){

    return(
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">

                <h1 className="text-9xl font-black text-red-600-200">404</h1>
            
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Opss!</p>
            
                <p className="mt-4 ">Página Não Encontrada</p>
            
                <a
                    href="/"
                    className="mt-6 inline-block rounded bg-[#C73B0F] px-5 py-3 text-sm font-medium text-white hover:bg-[#952C0B] focus:outline-none focus:ring"
                >
                    Voltar Para Home
                </a>
            </div>
       </div>
    )
}