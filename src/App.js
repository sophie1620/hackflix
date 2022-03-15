import './index.css';
import Header from './Header';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';

// import two pieces from the Router library, which will allow us to configure the routes within this app
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="wrapper">
      {/* In our app we will have three components */}
        {/* header */}
        <Header />

        {/* now we need to define our routing configutation (this is often done within the App component) */}
    

        {/* step#1: use the Routes component to act as a parent container to all of the subsequently defined Routes, AKA defined URL paths */}
        <Routes>
          {/* step#2: define the individual routes/ URL paths which are availabel within your app, as well as the components which are visible at those paths */}

          {/* here is where you will define which component is visible at what path */}
          <Route path="/" element={ <MovieCatalogue/> } />

          {/* the MovieInfo component shoudl be shown when the route looks like: www.homepage.com/movieIdHere */}
          <Route path='/:movieId' element={ <MovieInfo/> } />

        </Routes>


        {/* movie catalogue */}
          {/* this component is only visible on the homepage */}

        {/* movie details component (which is renderd when teh user selects a movie*/}


    </div>
  );
}

export default App;
