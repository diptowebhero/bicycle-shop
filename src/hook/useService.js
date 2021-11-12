import { useEffect, useState } from "react";

const useService = ()=>{
    const[services,setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(response => response.json())
        .then(data => setService(data))
    },[])

    return {
        services
    }
}

export default useService;;