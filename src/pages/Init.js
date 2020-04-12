import React,{ useState,useRef,useCallback } from 'react'
import { RequestProduct } from '../components/Main/Products/RequestProduct'
import './custom.css'

import image from '../components/img/img.png'

const Init = () =>{
    const [query,setQuery] = useState('')
    const [pageNumber,setPageNumber] = useState('')
    const [typingTimeout,setTypingTimeout] = useState(0)

    
    const { products,hasResult,loading,hasError } = RequestProduct(query,pageNumber)

    const observer = useRef()
    const lastProductElement = useCallback(elem =>{
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries =>{
            if (entries[0].isIntersecting && hasResult){
                setTimeout(()=>{
                    setPageNumber(prevPageNumber => prevPageNumber + 1)
                },500)
            }
        })
        if(elem) observer.current.observe(elem)
    },[loading,hasResult])

    function handleSearch(e){
        if (typingTimeout){
            clearTimeout(typingTimeout)
        }
        let value = e.target.value
        setTypingTimeout(setTimeout(() =>{
            setQuery(value)
            setPageNumber(1)
        },300))
    }
    
    return(
        <div>
            <div className="container init">
                <div className="init-search">
                    <div>Our Newest Products</div>
                    <div className="init-search-bar">
                        <label className="init-search-text">search</label>
                        <input id="init-search-input" type="text" onChange={handleSearch}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="init-results">{loading && 'Loading ..'}{hasError && `${hasError}`}
                {products.map((prod,index) => {
                    if(products.length === index + 1){
                        return  (
                        <div ref={lastProductElement} key={prod.id}  className="prod-card-bg">
                            <div><img src={image} alt="products"/></div>
                                <div><h3>{prod.name}</h3></div>
                                <div>{prod.description}</div>
                        </div>
                        )
                    }else{
                        return  (
                            <div key={prod.id} className="prod-card-bg">
                                <div><img src={image} alt="products"/></div>
                                <div><h3>{prod.name}</h3></div>
                                <div>{prod.description}</div>
                            </div>
                            )
                    }
                })}
                </div>
            </div>
        </div>
    )
}
export default Init