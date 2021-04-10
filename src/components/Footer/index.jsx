import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import Logo from "../../assets/img/Logo.png";
import style from "./index.module.scss";

function Footer(props) {
  return (
    <div>
      <AppBar position="static" style={{ background: "black" }}>
        <Toolbar>
          <div className={style.container}>
            <div className={style.container_logo}>
              {/* <img className={style.logo} src={Logo} alt="FUMIPRO" /> */}
            </div>
            <div className={style.container_btn}>
              <Typography
                component="span"
                variant="body2"
                align="justify"
                display="inline"
                style={{ color: "white" }}
              >
                <Box fontWeight="fontWeightLight" lineHeight={2} m={1}>
                  (c) 2021 Fumipro Todos los derechos reservados
                </Box>
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
