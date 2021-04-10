import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    return (
      <div className="container">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <style>{cssstyle}</style>
        <Slider {...settings}>
          <div>
            <Typography
              variant="h4"
              color="inherit"
              align="center"
              component="div"
              className={styles.title}
            >
              <Box fontWeight="fontWeightRegular" m={1}>
                "Con solo esa bañada tuvieron. ¡Muy buen trabajo!"
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              align="center"
              component="div"
              className={styles.title}
            >
              <Box fontWeight="fontWeightLight" m={1}>
                - Julio Soria
              </Box>
            </Typography>
          </div>
          <div>
            <Typography
              variant="h4"
              color="inherit"
              align="center"
              component="div"
              className={styles.title}
            >
              <Box fontWeight="fontWeightRegular" m={1}>
                "¡Trabajo garantizado!"
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              align="center"
              component="div"
              className={styles.title}
            >
              <Box fontWeight="fontWeightLight" m={1}>
                - Juan Luis
              </Box>
            </Typography>
          </div>
          <div>
            <Typography
              variant="h4"
              color="inherit"
              align="center"
              component="div"
              className={styles.title}
            >
              <Box fontWeight="fontWeightRegular" m={1}>
                "¡Excelente trabajo Fumipro!"
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              align="center"
              component="div"
              className={styles.title}
            >
              <Box fontWeight="fontWeightLight" m={1}>
                - Froylán Villagómez
              </Box>
            </Typography>
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px; 
  img{
    width: 350px;
    height: 400px;
  }
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
@media (max-width: 700px) {
	.container {
	  margin: 0 auto;
	  padding: 0px 40px 40px 40px;
	  width: 250px;
	  img{
		width: 250px;
		height: 300px;
	  }
	  .slick-dots ul {
		  bottom: -43px !important;
	  }
	}
  }
`;
