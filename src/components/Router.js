import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import App from '../App';
import ThreeScene from "./ThreeScene";
import PlaceInstace from "./PlaceInstace";
import washintonIcon from '../images/washington-icon.png';
import washintonBanner from '../images/washinton.jpeg';

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
            place_name: 'Test',
            icon: washintonIcon,
            image_name: 'testImage',
            coordinates: [77.043444, 38.909664],
            router: '/test',
            banner: washintonBanner
        },
        // To add a place, simpy add a json here!
    ];

    const generatePlaces = () => {
        const placesToShow = [];
        places.forEach((placeInstance, index) =>
            placesToShow.push(
                <Route exact
                       key={index}
                       path={placeInstance.router}
                       element={<PlaceInstace
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