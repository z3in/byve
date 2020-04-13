import React, { useEffect, useState } from 'react'


export const Test =() =>{
    const [data,setData] = useState({page: 4,search_string:''})
    const [result,SetResult] = useState({})
    
    useEffect(()=>{
        fetch('../api/products',{
            method:'POST',
            cache: 'default',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=UTF-8'     
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        SetResult(data)
        })
        },[data])

    return(
    <div></div>
    )
}