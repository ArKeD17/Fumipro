import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
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
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/166021574_115318457313148_6288979037604951234_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=w43czU7Ds5gAX9AE1wC&_nc_ht=scontent.fntr4-1.fna&oh=bd6cbaae77c57b8b425b03cd63c36f14&oe=608E8084"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/166316589_115317703979890_9093037769704239991_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=uN7NlmQe-O0AX9hM-M_&_nc_ht=scontent.fntr4-1.fna&oh=e658ca539fe6d893e54f4feaf0cf2ae1&oe=608D2E87"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/166491986_115317677313226_1081752346594716786_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=0P050qBZCiYAX81m3mM&_nc_ht=scontent.fntr4-1.fna&oh=b1195ce4f031e8d0f0cd43678a86d788&oe=6090559E"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/166086205_115317007313293_2401994683327038541_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=pHuHKK2VGWcAX_e-sCI&_nc_ht=scontent.fntr4-1.fna&oh=f6daa14e0b05b2b4d2ca9c0f719f11b7&oe=608CB24E"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/166124305_114301400748187_2413445349784245721_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=FNyYPCttv-wAX8S5WwE&_nc_ht=scontent.fntr4-1.fna&oh=26c0205b1dc6e22f78efa36054b64a30&oe=608F23CC"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/165816847_114301250748202_2295975778384706708_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=1sHO0V1YoqEAX92HlQK&_nc_ht=scontent.fntr4-1.fna&oh=28eccfc91b3dacca39fa616f2c994ff2&oe=608DE8BB"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/165974175_114291460749181_8529046616237316039_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=hqENVY4SM54AX9qrZEJ&_nc_ht=scontent.fntr4-1.fna&oh=8ca87a6e95bcdcc2ae42853f1028f8ca&oe=608DA425"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/165846666_114289157416078_6601492546959788793_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xUtiZyLvbxMAX9Y07Sc&_nc_ht=scontent.fntr4-1.fna&oh=f01e0672c724201294d9502a9f7d996b&oe=608EE8D4"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/164100835_108771081301219_4313303157824949924_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=VF0pqUCzxd4AX948REi&_nc_ht=scontent.fntr4-1.fna&oh=3c6a75ebb7e5530df34720776846cbc6&oe=608E9E4B"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/162022443_108769504634710_615413055724877925_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=QHeaSdZ0g_wAX-yzgMK&_nc_ht=scontent.fntr4-1.fna&oh=4ced90310633b729c50aa0be6b8a73c6&oe=608D43BA"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/162043932_108765134635147_3945100774949882836_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_ohc=UbGQRUi6P1AAX8ubzyv&_nc_ht=scontent.fntr4-1.fna&oh=c3dbff37f8cd10ddf72c843eab46c632&oe=608CE70D"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/171037585_121055833406077_3493841923819250324_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHP-tWhMhHfJ94_14rP7Xt-JvLS0XFsMjQm8tLRcWwyNKl9_cDgJT62FHGP-x5MG5E&_nc_ohc=GGRV6KKl5fMAX9d3HZh&_nc_ht=scontent.fntr4-1.fna&oh=abbe68b8765e705beb4ecb3347ba674f&oe=6097F540"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/171536256_121055873406073_4298802471392578957_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGsUHOVx0QHwl6_incSqdZUaVt75IQQm1lpW3vkhBCbWYiUL7m5hhGwRdCGVeevtAo&_nc_ohc=9XzVm9YQP_kAX_x_b0l&_nc_ht=scontent.fntr4-1.fna&oh=9514ef1ad321f54daf815a63e24819d0&oe=609863CB"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/172069622_121055973406063_4766671372275934807_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGluwluC9Tqn0gmeeSuNPm3L3tCOm8r8rsve0I6byvyu9fEtE_j-_WDlvOXGhyLLog&_nc_ohc=oLrQIb6qwGQAX93yhq3&_nc_ht=scontent.fntr4-1.fna&oh=d7c90a079b2a92d46a0061b6bf997ef2&oe=60980B54"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/171849353_121056060072721_5198562886337410225_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGX9Bh6QmfnC2h5zdRgk0XVyIBgwc2VW8fIgGDBzZVbx9Y6O79KD7LszbDYbpxMoVg&_nc_ohc=kJMdM7ZkjGIAX-erh52&_nc_ht=scontent.fntr4-1.fna&oh=48ccd6757fdf22ceb7f609599d483d63&oe=60990582"
              alt="Imagen Fumipro"
            />
          </div>
          <div className={styles.container_img}>
            <img
              src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/171277970_121056086739385_6023253623566659133_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeG-Ar8sCcmnlcpPzyB-KuMOnXinVxkD4BGdeKdXGQPgEUsmjLGd7TgwAJVhwQvGmpA&_nc_ohc=sFL8bOw6Wq0AX9xwXY3&_nc_ht=scontent.fntr4-1.fna&oh=ccd4ec5db4d33fbd7a9bd3abfd9f2f9d&oe=6096C1E0"
              alt="Imagen Fumipro"
            />
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
		ul {
			bottom: -43px !important;
		}
	}
  }
`;
