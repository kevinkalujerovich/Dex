import { Badge, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function FavoriteCart() {
  return (
    <>
      <IconButton color="inherit">
        <Badge badgeContent={1} color="secondary">
          <FavoriteIcon />
        </Badge>
      </IconButton>
    </>
  );
}
