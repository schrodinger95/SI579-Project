import InteractiveMap from "./components/InteractiveMap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = (props) => {
    const places = props.places;
    return (
        <main className="container">
            <InteractiveMap places={places}/>
        </main>
    );
}

export default App;
