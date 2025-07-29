import { Card, Flex, Tag } from "antd";
import React from "react";

import { Typography } from "antd";

const { Title, Text } = Typography;

export const FilmContainer = ({ filmData }) => {
  return (
    <Card
      hoverable
      style={{ width: 360 }}
      cover={<img alt="example" src={filmData.Poster} />}
    >
      <Flex justify="space-between" align="center">
        <Title style={{ margin: "8px 0" }} level={4}>
          {filmData.Title}
        </Title>
        <Tag color="lime">{filmData.Year}</Tag>
      </Flex>
      <Text>{filmData.Actors}</Text>
    </Card>
  );
};
