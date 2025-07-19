import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { Avatar, Badge, Flex, Layout, Spin, Typography } from "antd";
import { ItemCard } from "./components/ItemCard";
const { Header, Content } = Layout;
const { Text } = Typography;
import { ShoppingCartOutlined } from "@ant-design/icons";

const getData = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setLoading(true);

    getData()
      .then((data) => {
        setItems(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const addToCart = useCallback(
    (id) => {
      const item = items.find((item) => item.id === id);
      if (item) {
        setCart((prevCart) => [...prevCart, item]);
      } else {
        console.error(`Item with id ${id} not found`);
      }
    },
    [items]
  );

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#5c5cff",
        }}
      >
        <div style={{ color: "white", fontSize: 24, flex: 1 }}>
          <Badge count={cart.length}>
            <Avatar shape="square" size="large">
              <ShoppingCartOutlined />
            </Avatar>
          </Badge>
        </div>
      </Header>
      <div style={{ padding: "0 48px" }}>
        <Layout
          style={{
            padding: "24px 0",
          }}
        >
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {loading ? (
              <Flex justify="center" align="center" style={{ height: "100%" }}>
                <Spin size="large" />
              </Flex>
            ) : items.length === 0 ? (
              <Flex justify="center" align="center" style={{ height: "100%" }}>
                <Text type="danger">No items found</Text>
              </Flex>
            ) : (
              <Flex wrap="wrap" gap={16} justify="center">
                {items.map((item) => (
                  <ItemCard
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    imageSrc={item.image}
                    onAddToCart={addToCart}
                  />
                ))}
              </Flex>
            )}
          </Content>
        </Layout>
      </div>
    </Layout>
  );
};
export default App;
