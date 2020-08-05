import React, { useContext } from "react";

import { Link } from "react-router-dom";




import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";





import { Context } from "../../Context/AuthContext";
import Button from "@material-ui/core/Button";




import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Header() {

    const { handleLogout } = useContext(Context);


  const classes = useStyles();
  return (
    <React.Fragment>
      
       <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit">
            Dashboard
          </Typography>

          <form onSubmit={handleLogout}>
            <Button color="inherit" className="button" type="submit">
              sair
            </Button>
          </form>

          <Button color="inherit" className="button" type="submit">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/cadastro"
            >
              Cadastrar
            </Link>
          </Button>


          <Button color="inherit" className="button" type="submit">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
     
    </React.Fragment>
  );
}