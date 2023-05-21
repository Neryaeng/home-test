import logo from './logo.svg';
import './App.css';
import AboutPage from './components/about/AboutPage';
import ImagesPage from './components/images-by-date/ImagesPage';
import WeatherPage from './components/mars-weather/WeatherPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './general/styles/general.styled';
// import store from './store/Store';
import { Provider } from 'react-redux';

function App() {
  return <>
    <Router>
      {/* <Provider store={store}> */}

      {/* <nav>
        <ul>
          <Button><Link to="/">Home</Link></Button>
          <Button><Link to="/about">About</Link></Button>
          <Button><Link to="/images">Images</Link></Button>
          <Button><Link to="/weather">Weather</Link></Button>
        </ul>
      </nav> */}
      <Routes>
        <Route exact path="/about" element={<AboutPage />} />
        <Route path="/images" element={< ImagesPage />} />
        <Route path="/weather" element={< WeatherPage />} />
        <Route index element={<AboutPage />} />
      </Routes>

      {/* < AboutPage />
      < ImagesPage images={images} />
      < WeatherPage /> */}
      {/* </Provider> */}
    </Router>

  </>
}

export default App;
