import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "../contexts/CartContext";

export default function CartWidget() {
  const cart = useCart();
  const contador = cart.cart.productos.length;
  return (
    <>
      <IconButton color="inherit">
        <Badge badgeContent={contador} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
}
