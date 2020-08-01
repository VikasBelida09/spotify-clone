import React, { createContext } from "react";
import "./Home.css";
import Product from "../Product/Product";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
export const HomeContext = createContext();
const useStyles = makeStyles({
  root: {
    background: "	#5bc0de",
    color: "white",
    fontWeight: "bolder",
    marginTop: "50px",
  },
});
const Home = () => {
  const classes = useStyles();
  const obj = {
    vertical: "top",
    horizontal: "right",
  };
  const [stateData, setdata] = useState({
    opened: false,
    data: "",
  });
  const { vertical, horizontal } = obj;
  const triggerSnackBar = (open, data) => {
    setdata({
      ...stateData,
      opened: open,
      data: data,
    });
  };
  return (
    <HomeContext.Provider value={{ triggerSnackBar }}>
      {stateData.opened && (
        <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{ vertical, horizontal }}
          open={stateData.opened}
          onClose={() => {
            setdata({ ...stateData, opened: false });
          }}
          message={`${stateData.data} is added to the cart`}
          key={"top" + "center"}
          ContentProps={{
            classes: {
              root: classes.root,
            },
          }}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setdata({ ...stateData, opened: false })}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      )}
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon banner"
        />
        <div className="home__row">
          <Product
            id="1234"
            title="Galaxy S10"
            price={1000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816p3TnkSjL._SY606_.jpg"
          />
          <Product
            id="12345"
            title="Watch: Coolest Watch Ever Developed on the Planet"
            price={110}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="12346"
            title="Alexa"
            price={100}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home__row">
          <Product
            id="123452"
            title="How to Win Friends and Influence People Kindle Edition"
            price={130}
            rating={5}
            image="https://m.media-amazon.com/images/I/51bwFsBc0TL.jpg"
          />
          <Product
            id="123461"
            title="Stories We Never Tell"
            price={100}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/41quwiKy+xL._SY344_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234212"
            title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)"
            price={1500}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234212"
            title="JBL T460BT Extra Bass Wireless On-Ear Headphones with 11 Hours Playtime & Mic (Black)"
            price={400}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71ynIMjwgwL._SX522_.jpg"
          />
          <Product
            id="1234212"
            title="
          Bose SoundSport Free, True Wireless Earbuds, (Sweatproof Bluetooth Headphones for Workouts and Sports), Bright Orange"
            price={1500}
            rating={3}
            image="https://m.media-amazon.com/images/I/61zjQysQkkL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="1234212"
            title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Silver)"
            price={500}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51ScatQvIkL._SL1000_.jpg"
          />
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
