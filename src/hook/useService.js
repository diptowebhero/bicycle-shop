import { useEffect, useState } from "react";

const useService = ()=>{
    const[services,setService] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-plateau-73097.herokuapp.com/service')
        .then(response => response.json())
        .then(data => setService(data))
    },[])

    return {
        services
    }
}

export default useService;;