import {
  Grid,
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ComponentInput from "./ComponentInput";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 50,
  },
  inputDomicilio: {
    marginTop: 15,
  },
  detalleDomicilio: {
    marginTop: 5,
  },
  btnFinalizar: {
    marginTop: 50,
  },
  formControl: {
    width: "100%",
  },
  btnAgregar: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#4caf50",
    "&:hover": {
      backgroundColor: "#357a38",
    },
  },
}));
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/,
  domicilio: /^[A-Za-z0-9\s]{1,40}$/,
  numero: /^\d{1,4}$/,
  piso: /^[A-Za-z0-9\s]{2}$/,
  departamento: /^[A-Za-z0-9\s]{1,4}$/,
  codigo: /^\d{4}$/,
};
const mensajes = {
  correo:
    "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.",
  nombre:
    "El nombre tiene que ser de 4 a 40 dígitos y solo puede contener letras.",
  apellido:
    "El apellido tiene que ser de 4 a 40 dígitos y solo puede contener letras.",
  telefono:
    "El telefono solo puede contener numeros y el maximo son 14 dígitos.",
  domicilio:
    "El domicilio tiene que ser de 4 a 40 digitos y solo puede contener letras y numeros.",
  numero:
    "El numero tiene que ser de 1 a 4 digitos y solo puede contener numeros.",
  piso: "El piso tiene que ser de 1 a 2 digitos y solo puede contener numeros y letras.",
  departamento:
    "El departamento tiene que ser de 1 a 4 digitos y solo puede contener numeros y letras.",
  codigo:
    "El codigo posta tiene que ser de 4 digitos y solo puede contener numeros .",
};
export default function Checkout() {
  const classes = useStyles();
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [apellido, setApellido] = useState({ campo: "", valido: null });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });
  const [domicilio, setDomicilio] = useState({ campo: "", valido: null });
  const [numero, setNumero] = useState({ campo: "", valido: null });
  const [piso, setPiso] = useState({ campo: "", valido: null });
  const [departamento, setDepartamento] = useState({ campo: "", valido: null });
  const [codigo, setCodigo] = useState({ campo: "", valido: null });
  const asd = () => {};

  return (
    <>
      <Grid container justify="center">
        <h2>DATOS PARA EL ENVÍO</h2>
      </Grid>
      <Container className={classes.main} maxWidth="md">
        <Grid container spacing={4} className={classes.main}>
          <Grid item xs={12} sm={6}>
            <ComponentInput
              estado={email}
              cambiarEstado={setEmail}
              type={"text"}
              label={"Email"}
              name={"email"}
              leyendaError={mensajes.correo}
              expresion={expresiones.correo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ComponentInput
              estado={nombre}
              cambiarEstado={setNombre}
              type={"text"}
              label={"Nombre"}
              name={"nombre"}
              leyendaError={mensajes.nombre}
              expresion={expresiones.nombre}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <ComponentInput
              estado={apellido}
              cambiarEstado={setApellido}
              type={"text"}
              label={"Apellido"}
              name={"apellido"}
              leyendaError={mensajes.apellido}
              expresion={expresiones.nombre}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ComponentInput
              estado={telefono}
              cambiarEstado={setTelefono}
              type={"text"}
              label={"Telefono"}
              name={"telefono"}
              leyendaError={mensajes.nombre}
              expresion={expresiones.telefono}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.inputDomicilio}>
          <ComponentInput
            estado={domicilio}
            cambiarEstado={setDomicilio}
            type={"text"}
            label={"Domicilio"}
            name={"domicilio"}
            leyendaError={mensajes.domicilio}
            expresion={expresiones.domicilio}
          />
        </Grid>
        <Grid container spacing={4} className={classes.detalleDomicilio}>
          <Grid item xs={12} sm={4}>
            <ComponentInput
              estado={numero}
              cambiarEstado={setNumero}
              type={"text"}
              label={"Numero"}
              name={"numero"}
              leyendaError={mensajes.numero}
              expresion={expresiones.numero}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ComponentInput
              estado={piso}
              cambiarEstado={setPiso}
              type={"text"}
              label={"Piso"}
              name={"piso"}
              leyendaError={mensajes.piso}
              expresion={expresiones.piso}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ComponentInput
              estado={departamento}
              cambiarEstado={setDepartamento}
              type={"text"}
              label={"Departamento"}
              name={"departamento"}
              leyendaError={mensajes.departamento}
              expresion={expresiones.departamento}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.detalleDomicilio}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Seleccionar provincia
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="seleccionar provincia"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ComponentInput
              estado={codigo}
              cambiarEstado={setCodigo}
              type={"text"}
              label={"Codigo Posta"}
              name={"codigo"}
              leyendaError={mensajes.codigo}
              expresion={expresiones.codigo}
            />
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.btnFinalizar}>
          <Button
            variant="contained"
            size="large"
            className={classes.btnAgregar}
            onClick={asd}
          >
            Finalizar Compra
          </Button>
        </Grid>
      </Container>
    </>
  );
}
