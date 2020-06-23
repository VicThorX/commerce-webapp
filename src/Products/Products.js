import React from 'react';
import Product from './Product';

function Products() {
  return (
	<div className="products">
		<div className="container">
			<div className="row">
				<div className="col">
					
					<div className="product_grid">

                    <Product image="../asserts/images/product_1.jpg" productExtra="new" name="Smart Phone" price="$670" />

                    <Product image="../asserts/images/product_2.jpg" productExtra="sale" name="Smart Phone" price="$670" />

                    <Product image="../asserts/images/product_3.jpg" productExtra="" name="Smart Phone" price="$670" />

                    <Product image="../asserts/images/product_4.jpg" productExtra="" name="Smart Phone" price="$670" />

                    <Product image="../asserts/images/product_5.jpg" productExtra="" name="Smart Phone" price="$670" />

                    <Product image="../asserts/images/product_6.jpg" productExtra="hot" name="Smart Phone" price="$670" />

                    <Product image="../asserts/images/product_7.jpg" productExtra="" name="Smart Phone" price="$670" />

                    <Product image="../asserts/images/product_8.jpg" productExtra="sale" name="Smart Phone" price="$670" />

					</div>
						
				</div>
			</div>
		</div>
	</div>
  );
}

export default Products;
