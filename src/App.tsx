import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { Routes, Route } from 'react-router-dom';
import { Context } from '.';
import { FormType } from './components/AuthForms/FormType';
import { LoadingPopUp } from './components/PopUp/LoadingPopUp';
import { UserShortDetails } from './models/userShortDetails.model';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage/HomePage';

const cookies = new Cookies();

function App() {
    const {store} = useContext(Context);

    useEffect(() => {
        if (!localStorage.getItem("roles")) {
            store.fetchRoles();
        }
        if (localStorage.getItem("refresh_token")) {
            store.refreshToken();
        }
        store.checkAuth();
    }, []);

    if (store.isLoading){
        return <LoadingPopUp/>
    }

    console.log(store.user as UserShortDetails);
    
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/signIn" element={ <AuthPage type={FormType.SIGN_IN} /> } />
            <Route path="/signUp" element={ <AuthPage type={FormType.SIGN_UP} /> } />
            <Route path="/forgot" element={ <AuthPage type={FormType.FORGOT} /> } />
        </Routes>
    );
}

export default observer(App);