import './App.css';
import HomePage from './pages/home/HomePage';

function App() {

    return (
        <div className="App">
            <div className="header">
                Header Section
            </div>
            <div className="body">
                <HomePage/>
            </div>
            <div className="footer">
                Footer Section
            </div>
        </div>
    );
}

export default App;
