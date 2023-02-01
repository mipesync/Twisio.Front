interface SuccessNotifyPopUpProps {
    isShown: boolean;
    text: string;
}

export function SuccessNotifyPopUp({ isShown, text }: SuccessNotifyPopUpProps) {
    return(
        <div
            className={`transition duration-300 ease-in-out -translate-y-20 opacity-0 ${isShown && "translate-y-0 opacity-100"} fixed px-5 py-2.5 gap-[30px] rounded-3xl text-center left-5 top-5`} style={{
            backgroundColor: 'rgba(0, 255, 50, 0.50)',
            boxShadow: '0px 0px 10px rgba(0, 255, 50, 0.50)'}}>
            <span className="whitespace-normal">{text}</span>
        </div>
    );
}