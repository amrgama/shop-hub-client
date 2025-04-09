import React, { useState } from 'react'
import Row from './Row';

const cart= {
    id: "1",
    userId: "sdf",
    createdAt: "Aug 15, 2020",
    totalQty: 10,
    totalPrice: "1000",
    products: [
        {
            product: {
                "id": 1,
                "title": "Mens Casual Premium Slim Fit T-Shirts ",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "aimage": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "image": "http://localhost:3600/71YXzeOuslL._AC_UY879_.jpg",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            },
            Qty: 3
        },
        {
            product: {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "aimage": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "image": "http://localhost:3600/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
            Qty: 5
        },
        {
            product: {
                "id": 3,
                "title": "Mens Cotton Jacket",
                "price": 55.99,
                "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                "category": "men's clothing",
                "aimage": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "image": "http://localhost:3600/71li-ujtlUL._AC_UX679_.jpg",
                "rating": {
                    "rate": 4.7,
                    "count": 500
                }
            },
            Qty: 2
        }
    ]
};

const CartTable = () => {
    // const totalProdPrice = useState();
    // const renderedTableRows = cart.products.map(({product, Qty}, i)=>{

    //     return(
    //         <tr key={i}>
    //             <td scope="col" className='product align-middle'>
    //                 <div className="d-flex align-items-center gap-3 py-2">
    //                     <img 
    //                         src={product.image} 
    //                         alt={product.title} 
    //                         style={{width: "50px", height: "50px"}} 
    //                     />
    //                     <span>{product.title}</span>
    //                 </div>
    //             </td>
    //             <td scope="col" className='price align-middle'>{product.price}</td>
    //             <td scope="col" className='quantity align-middle'>{Qty}</td>
    //             <td scope="col" className="total align-middle">{product.price * Qty}</td>
    //             <td scope="col" className="action align-middle">{product.price * Qty}</td>
    //          </tr>
    //     )
    // })

    const renderedTableRows = cart.products.map((data, i)=>{
        return <Row key={i} index={i} data={data} />
    })

  return (
    <div style={{minWidth: "600px"}}>
        <table className="table table-hover text-start">
            <thead className='table-light'>
                <tr>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Product</th>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Price</th>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Quantity</th>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Total</th>
                    <th scope="col" className='fw-500 px-3 lh-lg'>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderedTableRows}
            </tbody>
        </table>
    </div>
  )
}

export default CartTable