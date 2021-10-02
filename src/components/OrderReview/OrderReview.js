import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../Hooks/Cart/useCart';
import UseProducts from '../../Hooks/UseProducts/usePorducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = UseProducts();
    const [cart, setCart] = useCart(products);
    const handelRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    const history = useHistory()
    const handelPlaceOrder = () => {
        history.push("/placeorder")
        setCart([])
        clearTheCart()
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handelRemove={handelRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}><button onClick={handelPlaceOrder} className='btn-regular'>Place order</button></Cart>
            </div>
        </div>
    );
};

export default OrderReview;