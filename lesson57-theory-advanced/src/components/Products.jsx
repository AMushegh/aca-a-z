import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Card, Button, Typography } from "antd";
import { useCart } from "../hooks/useCart";
import {
  addToCartWithCall,
  removeFromCart,
} from "../helpers/cartActionCreators";

const { Text } = Typography;

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <Flex wrap gap={30} justify="center">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  style={{ height: 250 }}
                  alt="example"
                  src={product.image}
                />
              }
            >
              <Flex vertical>
                <Text>{product.title}</Text>
                <Button
                  type="primary"
                  onClick={() => addToCartWithCall(product.id).then(dispatch)}
                >
                  Add to Cart
                </Button>
                <Button
                  type="dashed"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove from Cart
                </Button>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};
