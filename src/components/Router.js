import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import App from '../App';
import ThreeScene from "./ThreeScene";
import PlaceInstance from "./PlaceInstance";
import washintonIcon from '../icons/washington-icon.png';
import washintonBanner from '../images/washinton.jpg';
import greatWallIcon from '../icons/great-wall-icon.png';
import greatWallBannner from '../images/great-wall.jpg';
import kyoto from '../images/kyoto.jpg';
import kyotoIcon from '../icons/kyoto-icon.png';
// import icons and images here!

const BasicRoute = () => {
    const places = [
        {
            place_name: 'Washinton',
            icon: washintonIcon,
            image_name: 'washintonImage',
            coordinates: [-77.043444, 38.909664],
            router: '/washinton',
            banner: washintonBanner
        },
        {
            place_name: 'The Great Wall of China',
            icon: greatWallIcon,
            image_name: 'greatWallImage',
            coordinates: [108.945, 34.263],
            router: '/greatWall',
            banner: greatWallBannner
        },
        {
            place_name: 'Kyoto',
            icon: kyotoIcon,
            image_name: 'kyotoImage',
            coordinates: [135.7680, 35.0116],
            router: '/kyoto',
            banner: kyoto
        }
    ];

    const generatePlaces = () => {
        const placesToShow = [];
        places.forEach((placeInstance, index) =>
            placesToShow.push(
                <Route exact
                       key={index}
                       path={placeInstance.router}
                       element={<PlaceInstance
                           key={index}
                           placeName={placeInstance.place_name}
                           placeBanner={placeInstance.banner}
                           placeID={placeInstance.id}
                           placeRouter={placeInstance.router}
                       />}
                />
            )
        );
        return placesToShow;
    }

    const generatePlaceScenes = () => {
        const placeScenesToShow = [];
        places.forEach((placeInstance, index) =>
            placeScenesToShow.push(
                <Route exact key={index}
                       path={placeInstance.router + '/scene'}
                       element={<ThreeScene
                           banner={placeInstance.banner}
                           router={placeInstance.router}
                       />}
                />
            )
        );
        return placeScenesToShow;
    }

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<App places={places}/>}/>
                {generatePlaces()}
                {generatePlaceScenes()}
            </Routes>
        </HashRouter>
    )
};

export default BasicRoute;