import React, { useEffect, useState } from 'react'
import ImagesPreview from '../../components/single-product/main-section/ImagesPreview'
import Main from '../../components/single-product/main-section/Main'
import Body from '../../components/single-product/body-section/Body'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const {id}= useParams();
  const [product, setProduct]= useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [isSuccess, setIsSuccess] = useState(false);
      const [isError, setIsError] = useState(false);
      const [errorMsg, setErrorMsg]= useState("");
  
      useEffect(()=>{
  
          setIsLoading(true);
          fetch(`http://localhost:3600/products/${id}`)
          .then(res=> res.json())
          .then(product=> {
              // console.log("products in fetch", products)
              setProduct(product);
              setIsLoading(false)
              setIsSuccess(true);
          })
          .catch(err => {
              setIsLoading(false)
              setIsError(true);
              // setErrorMsg(err.message)
          })
      }, [id])
      console.log("product>>", product);
      useEffect(()=>{
        window.scrollTo(0, 0);
      }, [])
  return (
    <div id='singlePage' className=''>
      <Main product={product} isLoading={isLoading} />
      <Body product={product} isLoading={isLoading} />
    </div>
  )
}

export default SingleProduct