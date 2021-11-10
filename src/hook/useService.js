import { useEffect, useState } from "react";

const useService = ()=>{
    const[services,setService] = useState([]);

    useEffect(() => {
        fetch('./service.json')
        .then(response => response.json())
        .then(data => setService(data))
    },[])

    return {
        services
    }
}

export default useService;;