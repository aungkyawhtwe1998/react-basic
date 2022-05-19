import React from 'react'

export default function Product({product}) {
    return (
        <div className="card col-6 col-lg-3 col-md-4">
                <img src={product.image} className="card-img-top w-50 h-50 mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-truncate">{product.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}
