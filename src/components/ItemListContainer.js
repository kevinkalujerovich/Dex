import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {
  CircularProgress,
  Grid,
  Container,
  Typography,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 50,
  },
  titleMenu: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 20,
  },
  mainMenu: {
    marginTop: 20,
    marginBottom: 20,
    color: "red",
    fontWeight: "bold",
  },
  marca: {
    color: "gray",
    borderWidth: "1px",
    borderColor: "black",
  },
  titleMarca: {
    fontWeight: "bold",
    marginTop: 20,
  },
  marcaLista: {
    color: "gray",
  },
  filtroMensaje: {
    fontWeight: "bold",
  },
  formControl: {
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  boxFiltros: {
    marginBottom: 30,
  },
}));
const precios = [
  { precio: "$2000 - $4999", min: 2000, max: 4999 },
  { precio: "$5000 - $10000", min: 5000, max: 10000 },
  { precio: "$10000 - $14999", min: 10000, max: 14999 },
  { precio: "$15000 o más", min: 15000, max: 100000 },
];

export default function ItemListContainer() {
  const classes = useStyles();
  const [mensaje, setMensaje] = useState(null);
  const [auxRelevantes, setAuxRelevantes] = useState(null);
  const [valueSelect, setValueSelect] = useState("");
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [aux, setAux] = useState(null);
  const [main, setMain] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("productos");
    catId
      ? itemsCollection
          .where("category", "==", catId)
          .get()
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => doc.data()));
            setAux(snapshot.docs.map((doc) => doc.data()));
            setLoading(false);
            setMensaje(false);
            setValueSelect("");
          })
      : itemsCollection
          .where("new", "==", true)
          .get()
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => doc.data()));
            setMain(true);
            setLoading(false);
          });
  }, [catId]);

  const reset = () => {
    setAuxRelevantes(null);
    setValueSelect("");
    setMensaje(false);
    setItems(aux);
  };
  const handleChange = (event) => {
    setValueSelect(event.target.value);
    event.target.value === "max"
      ? setItems([...items].sort((a, b) => b.precio - a.precio))
      : event.target.value === "min"
      ? setItems([...items].sort((a, b) => a.precio - b.precio))
      : auxRelevantes
      ? setItems([...auxRelevantes])
      : setItems([...aux]);
  };

  const filtrarMarca = (value) => {
    setValueSelect("");
    setMensaje("Marca: " + value);
    setItems([...aux].filter((x) => x.marca === value));
    setAuxRelevantes([...aux].filter((x) => x.marca === value));
  };

  const filtrarPrecio = (precio, min, max) => {
    setValueSelect("");
    setMensaje("Precio: " + precio);
    setItems([...aux].filter((x) => x.precio >= min && x.precio <= max));
    setAuxRelevantes(
      [...aux].filter((x) => x.precio >= min && x.precio <= max)
    );
  };

  return (
    <Container className={classes.main}>
      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <>
          {main ? (
            <>
              <Typography variant="h4" gutterBottom>
                Los más vendidos
              </Typography>
              <Grid container spacing={1}>
                <ItemList array={items} col={3} />
              </Grid>
            </>
          ) : (
            <Grid container spacing={1}>
              <Grid item xs={12} sm={2}>
                <>
                  {mensaje && (
                    <>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.titleMenu}
                      >
                        ESTÁS VIENDO:
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.boxSelect}
                      >
                        <span className={classes.filtroMensaje}>{mensaje}</span>
                      </Typography>
                      <Link
                        component="button"
                        variant="body2"
                        onClick={reset}
                        className={classes.mainMenu}
                      >
                        Eliminar filtros
                      </Link>
                    </>
                  )}
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    className={classes.titleMenu}
                  >
                    FILTRÁ TU BÚSQUEDA POR:
                  </Typography>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Ordenar por
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="seleccionar provincia"
                      value={valueSelect}
                      onChange={handleChange}
                    >
                      <MenuItem value={"original"}>Mas Relevantes</MenuItem>
                      <MenuItem value={"min"}>Precio mas bajo</MenuItem>
                      <MenuItem value={"max"}>Precio mas alto</MenuItem>
                    </Select>
                  </FormControl>
                  <Grid container spacing={1} className={classes.boxFiltros}>
                    <Grid item xs={6} sm={12}>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className={classes.titleMarca}
                      >
                        MARCA
                      </Typography>
                      {[...new Set(aux.map((x) => x.marca))].map((x, i) => (
                        <Grid key={i}>
                          <Link
                            component="button"
                            variant="body2"
                            onClick={() => filtrarMarca(x)}
                            className={classes.marcaLista}
                            style={{ textDecoration: "none" }}
                          >
                            {x}
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid item xs={6} sm={12}>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className={classes.titleMarca}
                      >
                        PRECIO
                      </Typography>
                      {precios.map((x, i) => (
                        <Grid key={i}>
                          <Link
                            component="button"
                            variant="body2"
                            onClick={() =>
                              filtrarPrecio(x.precio, x.min, x.max)
                            }
                            className={classes.marcaLista}
                            style={{ textDecoration: "none" }}
                          >
                            {x.precio}
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Grid container spacing={1}>
                  <ItemList array={items} col={3} />
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Container>
  );
}
