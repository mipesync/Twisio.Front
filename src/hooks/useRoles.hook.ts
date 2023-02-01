import axios from "axios";
import { useEffect, useState } from "react";

const apiHost = process.env.REACT_APP_API_HOST;

export function useRoles() {
    const [model, setModel] = useState([]);
    
    async function fetchRoles() {
        let response = await axios.get(`${apiHost}/user/get_roles`);
        setModel(response.data.roles);
    }

    useEffect(() => {
        fetchRoles();
    }, []);

    return model;
}