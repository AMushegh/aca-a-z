import React, { useEffect, useState } from "react";
import { Flex, Spin, Typography, Empty } from "antd";
import { FilmSearch } from "./FilmSearch";
import { useDebounce } from "../../hooks/useDebounce";
import { FilmContainer } from "./FilmContainer";
import { useFilmData } from "../../hooks/useFilmData";

const { Title } = Typography;

export const Films = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("fetch", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const { loading, error, data } = useFilmData(debouncedSearchTerm);

  return (
    <Flex vertical justify="center" gap={70}>
      <FilmSearch value={searchTerm} onChange={setSearchTerm} />
      <Flex justify="center" align="center" style={{ minHeight: "500px" }}>
        {loading ? (
          <Spin size="large" />
        ) : error ? (
          <Title level={2}>No Movie Found</Title>
        ) : data ? (
          <FilmContainer filmData={data} />
        ) : (
          <Empty />
        )}
      </Flex>
    </Flex>
  );
};
