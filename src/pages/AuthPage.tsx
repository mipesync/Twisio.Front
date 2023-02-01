import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import { useMediaQuery } from "react-responsive";
import { AuthForm } from "../components/AuthForms/AuthForm";
import { FormType } from "../components/AuthForms/FormType";

interface AuthPageProps {
    type: FormType;
}

export function AuthPage({ type }: AuthPageProps) {
    const isContentCompress = useMediaQuery({ query: '(max-width: 1300px)' });
    const isContentFill = useMediaQuery({ query: '(max-width: 475px)' });

    return(
        <div className={`w-screen h-screen text-white font-sans font-normal flex flex-col justify-center items-center gap-[30px] p-5`}
            style={{ backgroundImage: "url(/assets/bg.png)", 
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover' }}>
            {isContentCompress && <img src="/assets/icon.svg" className="w-16"/>}
            <div className={`flex flex-row gap-24 justify-center items-center ${isContentFill && "w-full"}`}>
                <MouseParallaxContainer resetOnLeave={true} inverted={true} className={`${isContentCompress && 'hidden'}`}>
                    <MouseParallaxChild factorX={0.03} factorY={0.03}>
                        <div className="m-6">
                            {!isContentCompress && <div className="flex flex-col gap-5 justify-center rounded-tl-[150px] rounded-tr-[50px] rounded-br-[250px] rounded-bl-[50px] p-24 h-[378px]" style={{
                                background: 'linear-gradient(292.63deg, rgba(255, 255, 255, 0) 0.03%, rgba(255, 255, 255, 0.05) 100.03%)',
                                boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)'
                                }}>
                                <img src="/assets/logo-full.png" alt="TWISIO" className="w-56"></img>
                                <label className="font-bold text-2xl">Покажи всем, что умеешь!</label>
                                <label className="font-regular whitespace-normal w-[480px]">Платформа, на которой ты можешь поделиться своим портфолио как для работодателей, так и для других пользователей :3</label>
                            </div>}   
                        </div>
                    </MouseParallaxChild>                    
                </MouseParallaxContainer >
                <AuthForm type={type} />
            </div>
        </div>
    );

}