    // src/components/ProductList.jsx

    import React from 'react';
    import products from './ProductJson';
    import './ProductList.css'; // Import the custom CSS file
    import ProductSlider from './ImageSlider/slider';

    const ProductList = () => {
    return (
        <div className="container mt-5">
        <h1 className="text-center font-bold text-4xl mb-5">Our Product List</h1>
        <div className="row">
            {products.map((product, index) => (
            <div className="col-md-6" key={index}>
                <div className="card mb-5 product-card">
                <div className="card-top">
                    <ProductSlider images={product.images} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.productTitle}</h5>
                    <p className="card-text">{product.productDescription}</p>
                    <p className="card-text"><strong>Price:</strong> ₹{product.productPrice}</p>
                    <ul className="list-group list-group-flush">
                    <p className="card-text"><strong>Features:</strong></p>
                    {product.features.map((feature, idx) => (
                        <div className="ml-2" key={idx}>
                        <li>{idx + 1}. {feature}</li>
                        </div>
                    ))}
                    </ul>
                    <p className="card-text mt-2"><strong>For purchase or dealer ship contact:</strong><br /> {product.contactNumber}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default ProductList;
