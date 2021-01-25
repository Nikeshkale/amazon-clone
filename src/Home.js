import React from 'react';
import Product from "./Product";
import "./Home.css";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/Mseries_newlaunch/Rv2_LP/M02s_LP_PC_1.1.jpg"
                alt=""
                /> 
                <div className="home__row">
                    <Product 
                    id="432765"
                    title="And Then One Day (Hindi): Aur Phir Ek Din"
                    price={9.5676}
                    image="https://cloudfront.penguin.co.in/wp-content/uploads/2020/08/9780143440451.jpg"
                    rating={5}
                    />
                    <Product
                     id="432766"
                    title="OnePlus 8T 5G (Lunar Silver 12GB RAM, 256GB Storage) "
                    price={628.7143}
                    image="https://m.media-amazon.com/images/I/51JXCikG5vL._AC_UY218_.jpg"
                    rating={5}                    
                    />
                      
                </div>
                <div className="home__row">
                <Product
                     id="432767"
                    title="AirPods Max "
                    price={619.6008}
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=470&hei=556&fmt=png-alpha&.v=1604709508000"
                    rating={5}                
                />
                <Product
                     id="432768"
                    title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Product(RED) - Aluminium Case with Product(RED) - Sport Band"
                    price={723.0372}
                    image="https://m.media-amazon.com/images/I/812m5ITIUjL._AC_UY218_.jpg"
                    rating={5}                
                />
                <Product
                     id="432769"
                    title="Apple MYDC2HNA MacBook Pro (Apple M1 Chip/8GB/512GB SSD/macOS Big Sur/Retina), 33.78 cm (13.3 inch)"
                    price={1953.1572}
                    image="https://www.reliancedigital.in/medias/Apple-MYDC2HNA-Laptops-491946470-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDY0Mzh8aW1hZ2UvanBlZ3xpbWFnZXMvaDRhL2hhNC85NDQzMDk5NzA1Mzc0LmpwZ3xiZTU0ZGVkYTFiZjI3NDE4ZjYyYTYzMDZjMjE5YzE5MWUyOGNlMjI3YTAwMDA1YjVjZTdmNGNjNWVhZTc3ODZj"
                    rating={5}                
                />
                </div>

                <div className="home__row">
                <Product
                     id="432764"
                     title="Samsung 48.9 inch (124.2 cm) Curved Gaming Monitor QLED 5K"
                     price={1094.98}
                     image="https://cdn.shopify.com/s/files/1/0214/1369/1456/products/NewProject_16_c05d9a4d-ec82-43ba-b2ac-a5b7b22242d7_540x.jpg?v=1600943842 "
                     rating={5}               
                />
                      
                </div>
                
            </div>
        </div>
    )
}

export default Home
