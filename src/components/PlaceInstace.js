import './PlaceInstance.css';

const PlaceInstace = (props) => {
    return (
        <div id={ props.placeID } className="place-container">
            <a href='#/' className="btn btn-primary">RETURN</a>
            <h2>{ props.placeName }</h2>
            <img alt={props.placeName} src={ props.placeBanner }/>
            <a href={`#${props.placeRouter}/scene`} className="btn btn-primary">ENTER</a>
        </div>
    )
}

export default PlaceInstace;