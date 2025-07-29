import { useEffect, useState } from "react";
import axios from "axios";

export const useFilmData = (searchTerm, method = "get") => {
  const [fetchState, setFetchState] = useState({
    data: null,
    error: false,
    loading: false,
  });

  useEffect(() => {
    if (searchTerm) {
      setFetchState((prev) => ({ ...prev, loading: true }));

      axios[method](
        `https://www.omdbapi.com/?apikey=1f5a2e4e&t=${searchTerm
          .split(" ")
          .join("+")}`
      )
        .then(({ data }) => {
          if (data.Response === "False") {
            throw new Error();
          } else {
            setFetchState({
              data,
              error: false,
              loading: false,
            });
          }
        })
        .catch(() =>
          setFetchState({
            data: null,
            error: true,
            loading: false,
          })
        );
    } else {
      setFetchState({
        data: null,
        error: false,
        loading: false,
      });
    }
  }, [method, searchTerm]);

  return fetchState;
};
