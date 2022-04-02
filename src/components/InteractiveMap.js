import './InteractiveMap.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from "mapbox-gl";
import 'bootstrap/dist/css/bootstrap.min.css';  

mapboxgl.accessToken ="pk.eyJ1IjoicnVnZXh1IiwiYSI6ImNsMTJwbWU0cTAxMGwzZXYwMjhtMzR5ZHcifQ.qX_ys7QA-VaSeqDIeGefGA";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const InteractiveMap = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(155);
    const [lat, setLat] = useState(30);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    useEffect(() => {
        if (!map.current) return;
        map.current.on('load', () => {
            map.current.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg',
                (error, image) => {
                    if (error) throw error;

                    map.current.addImage('placeImage', image);
                }
            );

            map.current.addSource('places', {
                // This GeoJSON contains features that include an "icon"
                // property. The value of the "icon" property corresponds
                // to an image in the Mapbox Streets style's sprite.
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<div class = "modal-dialog" ><h2>Washinton</h2><br/><br/>' +
                                    `<a href="/washinton" class ="btn btn-primary" style="pointer-events:auto">ENTER</a></div>`,
                                'icon': 'placeImage'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-77.043444, 38.909664]
                            }
                        }
                    ]
                }
            });
            // Add a layer showing the places.
            map.current.addLayer({
                'id': 'places',
                'type': 'symbol',
                'source': 'places',
                'layout': {
                    'icon-image': '{icon}',
                    'icon-allow-overlap': true,
                    'icon-size': 0.2
                }
            });

            // When a click event occurs on a feature in the places layer, open a popup at the
            // location of the feature, with description HTML from its properties.
            map.current.on('click', 'places', (e) => {
                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map.current);
            });

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.current.on('mouseenter', 'places', () => {
                map.current.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.current.on('mouseleave', 'places', () => {
                map.current.getCanvas().style.cursor = '';
            });
        });
    });

    return (
        <div className="map-container ">
            <h1>Travel through the map</h1>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div className="map" ref={mapContainer}/>
        </div>
    );
}

export default InteractiveMap;