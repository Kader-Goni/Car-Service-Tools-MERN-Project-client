import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser= {email: email, name:name};
        if(email){
            fetch(`https://quiet-reef-68495.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'                    
                },
                body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('data insite usetoken', data)
                    const accessToken = data.token;
                    console.log(accessToken)
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
            }

    }, [user])

    return [token];
}

export default useToken;