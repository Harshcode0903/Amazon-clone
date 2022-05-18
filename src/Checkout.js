import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.convertize.com/wp-content/uploads/2018/01/checkout-page-optimization-prime.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h4> Your Shopping Basket Is Empty</h4>
            <p className="checkout__p">
              You have no items in your basket. To buy one or "Add to basket"
              next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h4 className="checkout__title">Your Shopping Basket</h4>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
