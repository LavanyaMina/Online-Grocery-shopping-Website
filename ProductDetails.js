import React,{useState,useEffect} from 'react'
import Layout from './../components/layout/layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
    const params=useParams()
    const [product,setProduct]=useState({})
    const [relatedProducts,setRelatedProducts]=useState([])


    useEffect(()=>{
        if (params?.slug) getProduct()
    },[params?.slug])

    const getProduct=async()=>{
        try {
            const { data } = await axios.get(
              `/api/v1/product/get-product/${params.slug}`
            );
            setProduct(data?.product);
            getSimilarProduct(data?.product._id, data?.product.category._id);
          } catch (error) {
            console.log(error);
          }
    }

    const getSimilarProduct=async(pid,cid)=>{
        try {
            const { data } = await axios.get(
              `/api/v1/product/related-product/${pid}/${cid}`
            );
            setRelatedProducts(data?.products);
          } catch (error) {
            console.log(error);
          }
    }

  return (
    <Layout>
      <div className='row container mt-2'>
        <div className='col-md-6'>
        <img src={`/api/v1/product/product-photo/${product._id}`} className="card-img-top" alt={product.name} height={"300px"} width={"350px"}/>
        </div>
        <div className='col-md-6'>
            <h1 className='text-center'>Product Details</h1>
            <h4>Name : {product.name}</h4>
            <h4>Description : {product.description}</h4>
            <h4>Price : {product.price}</h4>
            <h4>Category : {product?.category?.name}</h4>
            <button className="btn btn-secondary ms-1">Add to Cart</button>
        </div>
      </div>
      <hr/>
      <div className='row container'>
         <h2>Similar Products</h2>
         {relatedProducts.length <1 && <p className='text-center'>No Similar Products Found</p> }
         <div className='d-flex flex-wrap'>
          {relatedProducts?.map((p)=>(
               
               <div className="card m-2" style={{width: '18rem'}}>
  <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
  <div className="card-body">
    <h5 className="card-title">{p.name}</h5>
    <p className="card-text">{p.description.substring(0,60)}</p>
    <p className="card-text">${p.price}</p>
    <button className="btn btn-secondary ms-1">Add to Cart</button>

  </div>
</div>      
           ))}
          </div>
      </div>
    </Layout>
  )
}

export default ProductDetails
