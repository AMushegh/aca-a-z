import React from "react";
import { Avatar, Badge, Button, Space } from "antd";
import { useCart } from "../hooks/useCart";
import { emptyCart } from "../helpers/cartActionCreators";

export const Header = () => {
  const { cart, dispatch } = useCart();

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
        <Button onClick={() => dispatch(emptyCart())}>clear</Button>
      </Space>
    </div>
  );
};
