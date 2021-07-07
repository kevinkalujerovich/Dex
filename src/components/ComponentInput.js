import { TextField } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
  },
}));
export default function ComponentInput({
  label,
  type,
  name,
  leyendaError,
  expresion,
  estado,
  cambiarEstado,
}) {
  const classes = useStyles();
  const [leyenda, setLeyenda] = useState("");
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };
  const validar = () => {
    if (expresion.test(estado.campo)) {
      cambiarEstado({ ...estado, validar: false });
      setLeyenda("");
    } else {
      cambiarEstado({ ...estado, validar: true });
      setLeyenda(leyendaError);
    }
  };

  return (
    <TextField
      className={classes.input}
      error={estado.validar}
      label={label}
      helperText={leyenda}
      onChange={onChange}
      onKeyUp={validar}
      variant="outlined"
    />
  );
}
