import React from 'react';
import "./Home.css";
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                   className="home_image"
                   src="https://i.imgur.com/SYHeuYM.jpg"
                   alt="" 
                />

             <div className="home_row">
                <Product 
                    id="123456"
                    title="New Apple Watch Series 6"
                    image="https://m.media-amazon.com/images/I/71ZlG-lXrSL._AC_UY218_.jpg"
                    price={592.48}
                    rating={3}
                />
                <Product
                    id="12345678"
                    title="Apple AirPods Pro"
                    image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg"
                    price={242.92}
                    rating={5}
                />
                <Product
                    id="12324665"
                    title="New Apple AirTag"
                    image="https://m.media-amazon.com/images/I/71L5lSfJIPS._AC_UY218_.jpg"
                    price={43.05}
                    rating={4}
                />
             </div>

             <div className="home_row">
                <Product
                    id="12316256"
                    title="Apple Macbook Pro"
                    image="https://m.media-amazon.com/images/I/71YRSVXhgQL._AC_UY218_.jpg"
                    price={1308.99}
                    rating={5}
                />
                <Product
                    id="12315256"
                    title="New Apple iPhone 12 Pro"
                    image="https://images-na.ssl-images-amazon.com/images/I/71DVgBTdyLL._SX679_.jpg"
                    price={1564.20}
                    rating={4}
                />
                <Product
                    id="12374256"
                    title="Apple Silicone Case"
                    image="https://m.media-amazon.com/images/I/61ECVO2rE4L._SY500_.jpg"
                    price={66.13}
                    rating={5}
                />
             </div>

             <div className="home_row">
                <Product
                    id="12352656"
                    title="Ray-Ban UV protected Sunglasses"
                    image="https://images-na.ssl-images-amazon.com/images/I/51qAepYezdL._UX679_.jpg"
                    price={129.14}
                    rating={5}
                />
                <Product
                    id="12378256"
                    title="Nike Men's Air Running Shoe "
                    image="https://images-na.ssl-images-amazon.com/images/I/71RbDiY0-GL._UX695_.jpg"
                    price={128.15}
                    rating={5}
                />
             </div>
            </div>
            
        </div>
    )
}

export default Home;
