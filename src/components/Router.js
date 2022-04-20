import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ThreeScene from "./ThreeScene";
import PlaceInstance from "./PlaceInstance";
import washintonIcon from "../icons/washington-icon.png";
import washintonBanner from "../images/washinton.jpg";
import greatWallIcon from "../icons/great-wall-icon.png";
import greatWallBannner from "../images/great-wall.jpg";
import kyoto from "../images/kyoto.jpg";
import kyotoIcon from "../icons/kyoto-icon.png";
import alaska from "../images/alaska.jpg";
import alaskaIcon from "../icons/alaska-icon.png";
import chengdu from "../images/chengdu.jpg";
import chengduIcon from "../icons/chengdu-icon.png";
import dali from "../images/dali.jpg";
import daliIcon from "../icons/dali-icon.png";
import moscow from "../images/moscow.jpg";
import moscowIcon from "../icons/moscow-icon.png";
import newyork from "../images/new-york.jpg";
import newyorkIcon from "../icons/new-york-icon.png";
import parkcity from "../images/park-city.jpg";
import parkcityIcon from "../icons/park-city-icon.png";
import riodejaneiro from "../images/rio-de-janeiro.jpg";
import riodejaneiroIcon from "../icons/rio-de-janeiro-icon.png";
import zurich from "../images/zurich.jpg";
import zurichIcon from "../icons/zurich-icon.png";
import shanghai from "../images/shanghai.jpg";
import shanghaiIcon from "../icons/shanghai-icon.png";
import sydney from "../images/sydney.jpg";
import sydneyIcon from "../icons/sydney-icon.png";
import hawaii from "../images/hawaii.jpg";
import hawaiiIcon from "../icons/hawaii-icon.png";
import iceland from "../images/iceland.jpg";
import icelandIcon from "../icons/iceland-icon.png";
import baikal from "../images/baikal.jpg";
import baikalIcon from "../icons/baikal-icon.png";
import morocoo from "../images/morocco.jpg";
import morocooIcon from "../icons/morocco-icon.png";
import zambia from "../images/zambia.jpg";
import zambiaIcon from "../icons/zambia-icon.png";
import mumbai from "../images/mumbai.jpg";
import mumbaiIcon from "../icons/mumbai-icon.png";
import newzealand from "../images/new-zealand.jpg";
import newzealandIcon from "../icons/new-zealand-icon.png";
import aconcagua from "../images/aconcagua.jpg";
import aconcaguaIcon from "../icons/aconcagua-icon.png";
import malaysia from "../images/malaysia.jpg";
import malaysiaIcon from "../icons/malaysia-icon.png";

// import icons and images here!

const BasicRoute = () => {
  const places = [
    {
      place_name: "Washinton",
      icon: washintonIcon,
      image_name: "washintonImage",
      coordinates: [-77.043444, 38.909664],
      router: "/washinton",
      banner: washintonBanner,
    },
    {
      place_name: "The Great Wall of China",
      icon: greatWallIcon,
      image_name: "greatWallImage",
      coordinates: [108.945, 34.263],
      router: "/greatWall",
      banner: greatWallBannner,
    },
    {
      place_name: "Kyoto",
      icon: kyotoIcon,
      image_name: "kyotoImage",
      coordinates: [135.768, 35.0116],
      router: "/kyoto",
      banner: kyoto,
    },
    {
      place_name: "Alaska",
      icon: alaskaIcon,
      image_name: "alaskaImage",
      coordinates: [-149.902, 61.1703],
      router: "/alaska",
      banner: alaska,
    },
    {
      place_name: "Chengdu",
      icon: chengduIcon,
      image_name: "chengduImage",
      coordinates: [104.0657, 30.5728],
      router: "/chengdu",
      banner: chengdu,
    },
    {
      place_name: "Dali",
      icon: daliIcon,
      image_name: "daliImage",
      coordinates: [109.57, 34.47],
      router: "/dali",
      banner: dali,
    },
    {
      place_name: "Moscow",
      icon: moscowIcon,
      image_name: "moscowImage",
      coordinates: [37.6176, 55.7558],
      router: "/moscow",
      banner: moscow,
    },
    {
      place_name: "New York",
      icon: newyorkIcon,
      image_name: "newyorkImage",
      coordinates: [-74.0059, 40.7128],
      router: "/newyork",
      banner: newyork,
    },
    {
      place_name: "Park City",
      icon: parkcityIcon,
      image_name: "parkcityImage",
      coordinates: [-111.843, 40.7128],
      router: "/parkcity",
      banner: parkcity,
    },
    {
      place_name: "Rio de Janeiro",
      icon: riodejaneiroIcon,
      image_name: "riodejaneiroImage",
      coordinates: [-43.1729, -22.9068],
      router: "/riodejaneiro",
      banner: riodejaneiro,
    },
    {
      place_name: "Zurich",
      icon: zurichIcon,
      image_name: "zurichImage",
      coordinates: [8.5417, 47.3769],
      router: "/zurich",
      banner: zurich,
    },
    {
      place_name: "Shanghai",
      icon: shanghaiIcon,
      image_name: "shanghaiImage",
      coordinates: [121.4737, 31.2304],
      router: "/shanghai",
      banner: shanghai,
    },
    {
      place_name: "Sydney",
      icon: sydneyIcon,
      image_name: "sydneyImage",
      coordinates: [151.2093, -33.8688],
      router: "/sydney",
      banner: sydney,
    },
    {
      place_name: "Hawaii",
      icon: hawaiiIcon,
      image_name: "hawaiiImage",
      coordinates: [-155.5828, 19.8967],
      router: "/hawaii",
      banner: hawaii,
    },
    {
      place_name: "Iceland",
      icon: icelandIcon,
      image_name: "icelandImage",
      coordinates: [-19.0208, 64.9631],
      router: "/iceland",
      banner: iceland,
    },
    {
      place_name: "Baikal",
      icon: baikalIcon,
      image_name: "baikalImage",
      coordinates: [135.0, 52.0],
      router: "/baikal",
      banner: baikal,
    },
    {
      place_name: "Morocco",
      icon: morocooIcon,
      image_name: "morocooImage",
      coordinates: [-7.0926, 31.7917],
      router: "/morocoo",
      banner: morocoo,
    },
    {
      place_name: "Zambia",
      icon: zambiaIcon,
      image_name: "zambiaImage",
      coordinates: [27.8493, -13.1338],
      router: "/zambia",
      banner: zambia,
    },
    {
      place_name: "Mumbai",
      icon: mumbaiIcon,
      image_name: "mumbaiImage",
      coordinates: [72.8777, 19.076],
      router: "/mumbai",
      banner: mumbai,
    },
    {
      place_name: "New Zealand",
      icon: newzealandIcon,
      image_name: "newzealandImage",
      coordinates: [174.8862, -40.9006],
      router: "/newzealand",
      banner: newzealand,
    },
    {
      place_name: "Aconcagua",
      icon: aconcaguaIcon,
      image_name: "aconcaguaImage",
      coordinates: [-70.6667, -32.8333],
      router: "/aconcagua",
      banner: aconcagua,
    },
    {
      place_name: "Malaysia",
      icon: malaysiaIcon,
      image_name: "malaysiaImage",
      coordinates: [101.9758, 4.2105],
      router: "/malaysia",
      banner: malaysia,
    },
  ];

  const generatePlaces = () => {
    const placesToShow = [];
    places.forEach((placeInstance, index) =>
      placesToShow.push(
        <Route
          exact
          key={index}
          path={placeInstance.router}
          element={
            <PlaceInstance
              key={index}
              placeName={placeInstance.place_name}
              placeBanner={placeInstance.banner}
              placeID={placeInstance.id}
              placeRouter={placeInstance.router}
            />
          }
        />
      )
    );
    return placesToShow;
  };

  const generatePlaceScenes = () => {
    const placeScenesToShow = [];
    places.forEach((placeInstance, index) =>
      placeScenesToShow.push(
        <Route
          exact
          key={index}
          path={placeInstance.router + "/scene"}
          element={
            <ThreeScene
              banner={placeInstance.banner}
              router={placeInstance.router}
            />
          }
        />
      )
    );
    return placeScenesToShow;
  };

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App places={places} />} />
        {generatePlaces()}
        {generatePlaceScenes()}
      </Routes>
    </HashRouter>
  );
};

export default BasicRoute;
