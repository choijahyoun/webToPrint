import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductCart from "../elements/product/ProductCart";
import { storageService } from "../elements/storage/storageService";
import Amount from "./modules/amount";
import CartTable from "./modules/cartTable";

const ShoppingCart = () =>{

    const [cartItems, setCartItems] = useState("");
    const [amount, setAmount] = useState("");
    const [cartTotal, setCartTotal] = useState();

    const dispatch = useDispatch();
    storageService.setItem('cart'); 

    return(
        <div className="ps-section--shopping ps-shopping-cart">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h1>Shopping Cart</h1>
                </div>
                <CartTable/>
                <Amount/>
            </div>
        </div>
    );
}

export default ShoppingCart;
