import { AuthFormProp } from "./AuthFormProp";
import { ForgotForm } from "./ForgotForm";
import { FormType } from "./FormType";
import { SignInAuthForm } from "./SignIn.AuthForm";
import { SignUpAuthForm } from "./SignUpAuthForm/SignUp.AuthForm";

export function AuthForm({ type }: AuthFormProp) {
    let element: JSX.Element;

    switch(type) {
        case FormType.SIGN_IN:
            element = <SignInAuthForm/>
            break;
        case FormType.SIGN_UP:
            element = <SignUpAuthForm/>
            break;
        case FormType.FORGOT:
            element = <ForgotForm/>
            break;
    }

    return(element);
}