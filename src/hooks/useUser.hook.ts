import axios from "axios";
import { useEffect, useState } from "react";
import { UserFullDetailsModel } from "../models/userFullDetails.model";

const apiHost = process.env.REACT_APP_API_HOST;

export function useUser(userId: string) {
    const [model, setModel] = useState({});    
    async function fetchDetails() {
        await axios.get<UserFullDetailsModel>(`${apiHost}/user/get_user_by_id?userId=${userId}`)
            .then((res) => {
                setModel(res);
            })
            .catch((error) => {
                console.log(error);
                
                return null;
            });;
    }
    
    useEffect(() => {
        fetchDetails();
    }, []);

    return model;
}