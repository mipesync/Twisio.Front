import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { IconTextButton } from "../Buttons/IconTextButton/IconTextButton";
import { Icons } from "../IconsEnum";
import { SubmitInput } from "../Inputs/SubmitInput";
import { TextInput } from "../Inputs/TextInput/TextInput";
import { TextInputType } from "../Inputs/TextInput/TextInputType";

export function ForgotForm() {
    const isContentFill = useMediaQuery({ query: '(max-width: 475px)' });
    
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        setEmailError('');

        if (!email.match(/(?:[A-Za-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
            setEmailError('Некорректный адрес электронной почты. Образец: user@example.com');
            return;
        }

        alert(`email: ${email}`);     
    }

    return(
        <div className={`p-5 flex flex-col gap-2.5 rounded-3xl ${isContentFill ? 'w-full' : "w-[440px]"}`} style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.25)'
        }}>
            <Link to="/signIn">
                <IconTextButton icon={Icons.DOWN} text="Вернуться" imgClasses="rotate-90 brightness-0 invert w-4"/>
            </Link>
            <form onSubmit={submitHandler}
                className={`flex flex-col justify-start items-center gap-[30px]`}>
                <label className="font-bold text-xl">Восстановить пароль</label>
                <fieldset className="flex flex-col justify-start w-full items-center gap-5">
                    <span>Введите адрес электронной почты, к которому привязан аккаунт:</span>
                    <TextInput type={TextInputType.EMAIL} setValue={setEmail} value={email} placeholder="user123@example.com" error={emailError}/>
                    <SubmitInput value="Восстановить пароль" />
                </fieldset>
            </form>
        </div>
    );
}