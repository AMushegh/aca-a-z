import React, { useContext } from "react";
import { Avatar, Badge, Space } from "antd";
import { CartContext } from "../providers/CartProvider";

export const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div
      style={{
        background: "#adadad",
        padding: "15px 20px",
        marginBottom: 20,
      }}
    >
      <Space size="middle">
        <Badge count={cart.cartCount}>
          <Avatar shape="square" size="large" />
        </Badge>
      </Space>
    </div>
  );
};
