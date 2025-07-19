import React, { memo } from "react";

import { Card, Tag, Tooltip, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;

export const ItemCard = memo(
  ({ id, imageSrc, title, category, price, onAddToCart }) => {
    console.log("rerender");
    return (
      <Card
        hoverable={true}
        style={{ width: 300 }}
        cover={<img alt="example" src={imageSrc} width={250} height={250} />}
        actions={[
          <Tooltip placement="bottom" title={"add to cart"}>
            <ShoppingCartOutlined
              key="add-to-cart"
              onClick={() => onAddToCart(id)}
            />
          </Tooltip>,
        ]}
      >
        <Meta title={title} description={category} />

        <div style={{ marginTop: 16 }}>
          <Tag color="blue">{price}$</Tag>
        </div>
      </Card>
    );
  }
);
