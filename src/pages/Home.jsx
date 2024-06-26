import React from "react";
import HeroBanner from "../components/HeroBanner";
import Products from "../components/Products";

const Home = () => {
	return (
		<>
			<HeroBanner />
			<div className="pb-2">
				<div className="products-heading">
					<h2>Best Selling Products</h2>
					<p>Products of many variations</p>
				</div>

				<div className="flex items-center justify-center min-h-screen-lg pb-5">
					<Products />
				</div>
			</div>
		</>
	);
};

export default Home;
