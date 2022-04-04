import './PlacesListing.css';
import PlaceInstace from "./PlaceInstace";

const PlacesListing = (props) => {

    const generatePlaceDescriptions = () => {
        const placesToShow = [];
        props.places.forEach((place, index) =>
            // Add an event's "markup" to the eventsToShow array.
            placesToShow.push(
                <PlaceInstace
                    key={index}
                    placeName={place.place_name}
                    placeBanner={place.banner}
                    placeID={place.id}
                    placeRouter={place.router}>
                </PlaceInstace>
            )
        );

        return placesToShow;
    };

    return (
        <div className='places-container'>
            { generatePlaceDescriptions() }
        </div>
    )
}

export default PlacesListing;