import React from "react";

export default function MiniCartItem({ item }) {
  return (
    <div key={item.id} className="item_mini_cart">
      <div className="mini_cart_name_square">
        <div className="mini_cart_square">
          <div></div>
        </div>
        <div className="mini_cart_name">{item.title}</div>
      </div>
      <div  className="mini_cart_item_price">{"Rs "+parseInt(item.actual_price)}</div>

      {}
    </div>
  );
}
