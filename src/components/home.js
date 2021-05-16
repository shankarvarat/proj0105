import React from 'react'

function Home(props) {
    console.warn("props:", props)
    return (
        <div>
            <h1>Home</h1>
            <div className="add-to-cart"><img src="https://img.icons8.com/ultraviolet/40/000000/add-shopping-cart.png" /></div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" />
                </div>
                <div className="text-wrapper item">
                    <span>Hp Laptop Price : $ 39000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() =>
                            props.addToCartHandler({ price: 1000 ,name:"Hp Laptop"})
                        }
                    >Add To Cart
                         </button>
                </div>

            </div>
        </div>
    )
}

export default Home