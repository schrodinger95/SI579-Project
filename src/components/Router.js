import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '../App';
import washintonBanner from '../images/washinton.jpeg';
import ThreeScene from "./ThreeScene";

const BasicRoute = () => {

    const places = [
        {
            place_name: 'Washinton',
            image_link: 'https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg',
            image_name: 'washintonImage',
            coordinates: [-77.043444, 38.909664],
            router: '/washinton',
            banner: washintonBanner
        },
        {
            place_name: 'Test',
            image_link: 'https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg',
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
                <Route path={placeInstance.router} element={<ThreeScene banner={placeInstance.banner}/>}/>
            )
        );
        return placesToShow;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App places={places}/>}/>
                {generatePlaces()}
            </Routes>
            {/* 地址栏跳转传参 */}
            {/* <Route exact path="/other/:id" component={Other}/> */}
        </BrowserRouter>
    )
};

export default BasicRoute;