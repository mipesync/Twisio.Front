import { Header } from "../components/Header";

export function HomePage() {
    return(
        <div className="w-screen h-screen"
            style={{ backgroundImage: "url(/assets/bg.png)", 
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover' }}>
            <Header isAuth={false} isReturn={true}/>
        </div>
    );
}