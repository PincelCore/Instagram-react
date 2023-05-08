import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Body from './body';

function App() {
    return (
        <div>
            <Navbar />
            <Body />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));