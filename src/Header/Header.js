import React from 'react';
import cartIcon from '../icons/cartIcon.svg';
import searchIcon from '../icons/searchIcon.svg';

function Header() {
  return (
	<header className="header">
		<div className="header_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="header_content d-flex flex-row align-items-center justify-content-start">
							<div className="logo"><a href="#">Sublime.</a></div>
							<nav className="main_nav">
								<ul>
									<li className="hassubs active">
										<a href="index.html">Home</a>
										<ul>
											<li><a href="categories.html">Categories</a></li>
											<li><a href="product.html">Product</a></li>
											<li><a href="cart.html">Cart</a></li>
											<li><a href="checkout.html">Check out</a></li>
											<li><a href="contact.html">Contact</a></li>
										</ul>
									</li>
									<li className="hassubs">
										<a href="categories.html">Categories</a>
										<ul>
											<li><a href="categories.html">Category</a></li>
											<li><a href="categories.html">Category</a></li>
											<li><a href="categories.html">Category</a></li>
											<li><a href="categories.html">Category</a></li>
											<li><a href="categories.html">Category</a></li>
										</ul>
									</li>
									<li><a href="#">Accessories</a></li>
									<li><a href="#">Offers</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</nav>
							<div className="header_extra ml-auto">
								<div className="shopping_cart">
									<a href="cart.html">
                                        <img src={cartIcon} />
										<div>Cart <span>(0)</span></div>
									</a>
								</div>
								<div className="search">
									<div className="search_icon">
                                        <img src={searchIcon} />
									</div>
								</div>
								<div className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="search_panel trans_300">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="search_panel_content d-flex flex-row align-items-center justify-content-end">
							<form action="#">
								<input type="text" className="search_input" placeholder="Search" required="required" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
        
		<div className="header_social">
			<ul>
				<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
			</ul>
		</div>
	</header>
  );
}

export default Header;
