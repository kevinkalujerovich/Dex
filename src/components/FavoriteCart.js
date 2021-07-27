import { Badge, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useFavorite } from "../contexts/FavoriteContext";

export default function FavoriteCart() {
  const favorite = useFavorite();
  const contador = favorite.favorite.length;
  return (
    <>
      <IconButton color="inherit">
        <Badge badgeContent={contador} color="secondary">
          <FavoriteIcon />
        </Badge>
      </IconButton>
    </>
  );
}
