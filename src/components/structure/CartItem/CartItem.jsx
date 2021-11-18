import React from "react";
import { useCart } from "../../../hooks/useCart";
import { Button } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import { IndeterminateCheckBox } from "@mui/icons-material";

function CartItem({ book }) {
  const { increase, decrease, removeProduct } = useCart();

  return (
    <div
      className="wrapper__cartItem"
      style={{ display: "flex", alignItems: "center", columnGap: "3rem" }}
    >
      <div>
        <img
          src={book.coverImg}
          alt={`${book.title}'s cover`}
          style={{ width: "10rem" }}
        />
      </div>
      <div>
        <p>{book.title}</p>

        <p>
          <Button onClick={() => increase(book)}>
            <AddBox />
          </Button>
          {book.quantity}

          {book.quantity === 1 && (
            <Button onClick={() => removeProduct(book)}>
              <IndeterminateCheckBox />
            </Button>
          )}

          {book.quantity > 1 && (
            <Button onClick={() => decrease(book)}>
              <IndeterminateCheckBox />
            </Button>
          )}
        </p>

        <p>R$ {book.price}</p>
        <div>
          <Button onClick={() => removeProduct(book)}>
            <Delete />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
