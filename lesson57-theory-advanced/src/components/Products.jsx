import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Flex, Card, Button, Typography } from "antd";
import { CartContext } from "../providers/CartProvider";

const { Text } = Typography;

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

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
                <Button type="primary" onClick={() => addToCart(product.id)}>
                  Add to Cart
                </Button>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};
