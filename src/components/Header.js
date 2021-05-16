import React from 'react'

function Header(props) {
    console.warn("props:", props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://img.icons8.com/ultraviolet/40/000000/add-shopping-cart.png" /></div>
        </div>
    )
}

export default Header