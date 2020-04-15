import React,{ useEffect,useState } from 'react'

const AuthenticateUser = (postData) =>{
    
    const [result,setResult] = useState({})

    useEffect(() =>{
        console.log(postData.email)
        if(postData.email !== '')
        {fetch('../api/login',{
            method:'POST',
            cache: 'default',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=UTF-8'
                
            },
            body: JSON.stringify(postData)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            setResult(data)
        })
        .catch(err=>console.log('err'))
        }
    },[postData])

    return { result }
}
export { AuthenticateUser }