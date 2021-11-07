import React from "react";
import { useCart } from "../../../hooks/useCart";

function CartItem({ product }) {
  const { increase, decrease, removeProduct } = useCart();

  return (
    <div className="wrapper__cartItem">
      <div>
        <img src={product.book.image} alt={`${product.book.title}'s cover`} />
      </div>
      <div>
        <p>{product.book.title}</p>
        <p>R$ {product.quantity}</p>
      </div>
      <div>
          <button type="button" onClick={()=>increase(product)}>Adicionar</button>
          <button type="button" onClick={()=>decrease(product)}>Remover</button>
          <button type="button" onClick={()=>removeProduct(product)}>Remover Tudo</button>
      </div>
    </div>
  );
}

export default CartItem;
