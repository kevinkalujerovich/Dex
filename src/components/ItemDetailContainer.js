import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Container, CircularProgress, Box, Grid } from "@material-ui/core";
import data from "../data.json";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [array, setArray] = useState({});
  const { Id } = useParams();

  useEffect(() => {
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getItems.then((res) => {
      setArray(res.filter((i) => i.id === Id));
    });
  }, [Id]);
  return (
    <Container>
      <Grid container spacing={2}>
        {array.length > 0 ? (
          array.map((item) => {
            return (
              <ItemDetail
                key={item.id}
                description={item.description}
                name={item.name}
                array={array[0]}
                img={item.img}
                precio={item.precio}
              ></ItemDetail>
            );
          })
        ) : (
          <Box mx="auto">
            <CircularProgress />
          </Box>
        )}
      </Grid>{" "}
    </Container>
  );
}
