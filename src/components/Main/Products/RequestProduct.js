import React,{ useEffect, useState } from 'react'


export const RequestProduct  = (query,pageNumber) =>{
    
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])
    const [hasResult,setHasResult] = useState(0)
    const [hasError, setHasError] = useState('')

    useEffect(()=>{
        setProducts([])
    },[query])

    useEffect(() =>{
        setLoading(true)
        const data = {
            search_key : query,
            page: pageNumber
        }
        fetch('../api/products',{
            method:'POST',
            cache: 'default',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=UTF-8'     
            },
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.status === 1){
               setProducts(prevProducts =>{
                return [...new Set([...prevProducts,...data.data])]
                })
                setHasResult(data.total>0)
                setLoading(false) 
                setHasError('')
            }else{
                setHasError(data.error[0])
                setLoading(false)
            }
        })
        .catch(err=>{
            console.log(err)
            setLoading(false)
        })
    },[query,pageNumber])
    return {loading,products,hasResult,hasError};
}