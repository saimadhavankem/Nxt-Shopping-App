import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLength = cartList.length
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="price">Order Total:{total}</h1>
          <p className="price para">{cartListLength} items in cart</p>
          <button type="button" className="checked-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
