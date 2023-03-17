import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.accesstoken) {
                        localStorage.setItem('accesstoken', data.accesstoken)
                        setToken(data.accesstoken)
                    }
                })
        }
    }, [email]);
    return [token]
}

export default useToken;