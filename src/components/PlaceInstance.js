import './PlaceInstance.css';

const PlaceInstance = (props) => {
    return (
        <div id={ props.placeID } className="place-container">
            <a href='#/' className="btn btn-primary">RETURN</a>
            <div id={ props.placeID } className="background-container">
                <div id={ props.placeID} className="img-container">
                    <img alt={props.placeName} src={ props.placeBanner }/>
                    <p className="title">{ props.placeName }</p>
                    <div className="overlay"></div>
                    <div className="button">
                        <a href={`#${props.placeRouter}/scene`} className="btn btn-primary">ENTER</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceInstance;