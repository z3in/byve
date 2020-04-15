import React,{ useState,useRef,useCallback } from 'react'
import { RequestProduct } from '../components/Main/Products/RequestProduct'
import ProductView from '../components/Main/Products/ProductView'
import './custom.css'

import star from '../components/img/star.png'
import image from '../components/img/img.png'

const Init = () =>{
    const [query,setQuery] = useState('')
    const [pageNumber,setPageNumber] = useState(0)
    const [typingTimeout,setTypingTimeout] = useState(0)
    const [toggleProdView,setToggleProdView] = useState('')
    const [viewProd, setViewProd] = useState({})
    
    const { products,hasResult,loading,hasError } = RequestProduct(query,pageNumber)

    const observer = useRef()
    const lastProductElement = useCallback(elem =>{
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries =>{
            if (entries[0].isIntersecting && hasResult){
                    setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if(elem) observer.current.observe(elem)
    },[loading,hasResult])

    const toggleView = (btn_id) => {
        let btn_id_int = parseInt(btn_id)
        if(toggleProdView===''){
            setToggleProdView(' product-active')
        }else{
            setToggleProdView('')
        }
        let result = products.find(prod => prod.id === btn_id_int)
        setViewProd(result)
    }

    const handleClose = () => {
        setToggleProdView('')
        setViewProd({})
    }

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
    const rating = (stars) =>{
        let starselem = []
        for(let i = 0;i <stars;i++){
            starselem.push(<div key={i}><img alt="star rating" src={star} width="20"/></div>)
        }
        return starselem;
    }
    return(
        <div>
            <div className="container init">
                <div className="init-search">
                    <div>Our Newest Products</div>
                    <div className="init-search-bar">
                        <label className="init-search-text">search</label>
                        <input id="init-search-input" type="text" name="search" onChange={handleSearch}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="init-results">{loading && 'Loading ..'}{hasError && `${hasError}`}
                {products.map((prod,index) => {
                    if(products.length === index + 1){
                        return  (
                        <div ref={lastProductElement} key={prod.id}  className="prod-card-bg">
                                <div className="prod-card-image"><img src={image} alt="products"/></div>
                                <div className="prod-card-title"><h3>{prod.name}</h3></div>
                                <div className="prod-card-details">item details :</div>
                                <div className="prod-card-details product-after">{prod.description}</div>
                                <div className="prod-price-rating"><div>price</div><div>rating</div></div>
                                <div className="prod-price-rating"><div><span className="prod-price">PhP {prod.price}.00</span></div>
                                        <div className="prod-rating">{rating(parseInt(prod.curr_rating))}</div></div>
                                
                                <div className="prod-card-add2cart"><button>Add to Cart</button></div>
                        </div>
                        )
                    }else{
                        return  (
                            <div key={prod.id} className="prod-card-bg">
                                <div className="prod-card-image"><img src={image} alt="products"/></div>
                                <div className="prod-card-title"><h3>{prod.name}</h3></div>
                                <div className="prod-card-details">item details :</div>
                                <div className="prod-card-details product-after">{prod.description}</div>
                                <div className="prod-price-rating"><div>price</div><div>rating</div></div>
                                <div className="prod-price-rating"><div><span className="prod-price">PhP {prod.price}.00</span></div>
                                        <div className="prod-rating">{rating(parseInt(prod.curr_rating))}</div></div>
                                
                                <div className="prod-card-add2cart"><button>Add to Cart</button><button value={prod.id} onClick={(e)=>toggleView(e.target.value)}>view</button></div>

                            </div>
                            )
                    }
                })}
                </div>
            </div>
            <ProductView toggleProdView={toggleProdView} handleClose={handleClose} viewProd={viewProd} rating={rating}/>
        </div>
    )
}
export default Init