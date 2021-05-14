import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core/';
import StorefrontIcon from '@material-ui/icons/Storefront';

const Navbar = () =>{
    return (
        <AppBar position="static">
        <Toolbar>
          <StorefrontIcon />
          <Typography variant="h6">
            Tienda
          </Typography>
        </Toolbar>
      </AppBar>
    )};




export default Navbar;
