import React from 'react';

function Product(props) {
  return (
    <div className="product">
        <div className="product_image"><img src={props.image} alt="" /></div>
        { ProductExtra(props.productExtra) }
        <div className="product_content">
            <div className="product_title"><a href="product.html">{props.name}</a></div>
            <div className="product_price">{props.price}</div>
        </div>
    </div>
  );
}

const ProductExtra = (extra) => {
    switch (extra)
    {
        case "new":
            return <div className="product_extra product_new"><a href="categories.html">New</a></div>;
        case "sale":
            return <div className="product_extra product_sale"><a href="categories.html">Sale</a></div>;
        case "hot":
            return <div className="product_extra product_hot"><a href="categories.html">Hot</a></div>;
        default:
            return "";
    }
}

export default Product;
