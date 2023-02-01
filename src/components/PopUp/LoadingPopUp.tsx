export function LoadingPopUp() {
    return(        
        <div
            className={`flex flex-col justify-center items-center gap-5 w-full h-full transition duration-300 ease-in-out fixed bg-black/50`}
            style={{ backgroundImage: "url(/assets/bg.png)", 
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover' }}>
            <img src="/assets/animate-icon(css).svg" alt="" className="w-36 h-36"/>
            <span className="font-bold text-white">Загрузка...</span>
        </div>
    );
}