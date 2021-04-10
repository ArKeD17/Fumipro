import React from "react";
import AppBar from "components/AppBar";
import RestaurantsPlaceholder from "components/Loader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FadeIn from "react-fade-in";
import styles from "./index.module.scss";
import Logo from "../../assets/img/Logo.png";
import Video1 from "../../assets/video/banner.mp4";
import Video2 from "../../assets/video/banner1.mp4";
import Video3 from "../../assets/video/banner2.mp4";
import Video4 from "../../assets/video/banner3.mp4";
import Slider from "components/Slider";
import SliderComments from "components/SliderComments";
import Paper from "@material-ui/core/Paper";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import Footer from "components/Footer";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCityOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";

const Page = ({ restaurants, progress, changeFilter, history }) => {
  return (
    <div>
      {!progress ? (
        <FadeIn>
          <div className={styles.banner}>
            <div className={styles.video_container}>
              <div className={styles.video_flex_container}>
                <video autoPlay muted loop className={styles.my_video}>
                  <source src={Video1} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
                <video autoPlay muted loop className={styles.my_video}>
                  <source src={Video2} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
                <video autoPlay muted loop className={styles.my_video}>
                  <source src={Video3} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
                <video autoPlay muted loop className={styles.my_video}>
                  <source src={Video4} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
            <div className={styles.banner_black}></div>
            <div className={styles.logo}>
              <div className={styles.logo_animation}>
                <Box className={styles.logo_fumipro_container}>
                  <img src={Logo} alt="Logo fumipro" />
                </Box>
              </div>
              <div className={styles.banner_text}>
                <Typography variant="h3" color="primary" align="center">
                  <Box
                    fontWeight="fontWeightLight"
                    m={1}
                    paragraph="true"
                    className={styles.text_logo}
                  >
                    FUMIPRO
                  </Box>
                </Typography>
                <div className={styles.icon_animation}>
                  <ArrowDropDownIcon style={{ fontSize: 40 }} color="primary" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      ) : null}
      <AppBar restaurants={restaurants} changeFilter={changeFilter} />
      <div className={styles.container}>
        <div className={styles.container_slider_and_title}>
          {!progress ? (
            <FadeIn>
              <div>
                <Typography
                  variant="h4"
                  color="inherit"
                  align="center"
                  component="div"
                  className={styles.title}
                >
                  <Box fontWeight="fontWeightRegular" m={1}>
                    ¡Bienvenidos!
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  align="justify"
                  component="div"
                  className={styles.title}
                >
                  <Box fontWeight="fontWeightRegular" m={1} lineHeight={2}>
                    Estas harto de las cucarachas, chinches, alacranes, o
                    cualquier tipo de plaga que afecte tu casa o tu familia, ¿y
                    no sabes que hacer? No te preocupes, ya llego la solución a
                    pedernales y sus alrededores, fumipro (Fumigaciones
                    profesionales) es una empresa que se dedica a controlar y
                    eliminar cualquier tipo de plaga urbana, en
                    casas,locales,talleres,restaurantes o cualquier
                    establecimiento que tenga problemas con estas molestas
                    plagas. Nosotros fumigamos tu casa o tu negocio, por medio
                    de aspersiones y nebulizaciones en frio, no lo pienses mas y
                    llamanos.
                  </Box>
                </Typography>
              </div>

              <div className={styles.container_galery}>
                <div className={styles.slider}>
                  <Paper elevation={3}>
                    <Typography
                      variant="h4"
                      color="inherit"
                      align="center"
                      component="div"
                      className={styles.title}
                    >
                      <Box fontWeight="fontWeightRegular" m={1}>
                        <ImageOutlinedIcon
                          style={{ fontSize: 50 }}
                          color="primary"
                        />
                      </Box>
                    </Typography>
                    <Slider />
                    {/* <img src='https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/166021574_115318457313148_6288979037604951234_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=w43czU7Ds5gAX9AE1wC&_nc_ht=scontent.fntr4-1.fna&oh=bd6cbaae77c57b8b425b03cd63c36f14&oe=608E8084' alt=""/> */}
                  </Paper>
                  <div className={styles.container_comments}>
                    <Typography
                      variant="h4"
                      color="inherit"
                      align="center"
                      component="div"
                      className={styles.title}
                    >
                      <Box fontWeight="fontWeightRegular" m={1}>
                        <ChatOutlinedIcon
                          style={{ fontSize: 50 }}
                          color="primary"
                        />
                      </Box>
                    </Typography>
                    <SliderComments />
                  </div>
                </div>
              </div>
              <div className={styles.margin_top_and_bottom}>
                <Typography
                  variant="h4"
                  color="inherit"
                  align="center"
                  component="div"
                  className={styles.title}
                >
                  <Box fontWeight="fontWeightRegular" m={1}>
                    ¿Quiénes somos?
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  align="justify"
                  component="div"
                  className={styles.title}
                >
                  <Box fontWeight="fontWeightRegular" m={1} lineHeight={2}>
                    Nos encontramos en Pedernales Michoacán y somos una empresa
                    que se dedica a controlar y eliminar cualquier tipo de plaga
                    urbana por medio de aspersiones y nebulizaciones en frio,
                    fumigamos en:
                  </Box>
                </Typography>
                <div className={styles.icons_container}>
                  <div>
                    <Typography
                      variant="h6"
                      color="primary"
                      align="justify"
                      component="div"
                      className={styles.title}
                    >
                      <Box fontWeight="fontWeightRegular" m={1} lineHeight={2}>
                        <RestaurantOutlinedIcon fontSize="large" />
                        Restaurantes
                      </Box>
                      <Box fontWeight="fontWeightRegular" m={1} lineHeight={2}>
                        <HomeOutlinedIcon fontSize="large" />
                        Casas
                      </Box>
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      color="primary"
                      align="justify"
                      component="div"
                      className={styles.title}
                    >
                      <Box fontWeight="fontWeightRegular" m={1} lineHeight={2}>
                        <LocationCityOutlinedIcon fontSize="large" />
                        Locales
                      </Box>
                      <Box fontWeight="fontWeightRegular" m={1} lineHeight={2}>
                        <AccountBalanceOutlinedIcon fontSize="large" />
                        Iglesias
                      </Box>
                    </Typography>
                  </div>
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className={styles.container_restaurants}>
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
                <RestaurantsPlaceholder />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
