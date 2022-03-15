// MovieCatalogue.js

// 1. import our axios library
import axios from "axios";

// 2. import useState and useEffect hook
import { useState, useEffect } from 'react';
// in order to recreate the behaviour of an achor with the added benefit/logic of React Router, we can use the Link component
import { Link } from 'react-router-dom';

function MovieCatalogue() {
    // console.log('catalogue function is running');

    // 3. initialize state to keep track of the movie data which will be returned from the API
    const [ movies, setMovies ] = useState([])

    // 4. initialize a useEffect to run the side effect of fetching data from the movie API (which will run only one time--on page load)
    useEffect( () => {
        // console.log('side effect test');

        // 5.make an asynchronous request to the TMDB API using axios
        axios({
            // API key: 67961b92f8c2648375eeecd2345a8418
            url: 'https://api.themoviedb.org/3/discover/movie', 
            params: {
                api_key: '67961b92f8c2648375eeecd2345a8418', 
                inlude_adult: false
            }
        }).then ( (apiData) => {
            // console.log(apiData.data.results);
            // 6. save the returned data within state 
            setMovies(apiData.data.results)
        })
    }, [])


    return (
        <section>

            <h2>Here are your viewing options</h2>

        {/* // 7. map through the state and return a movie for each movie present in the returned API data */}
        <ul className="catalogue">
            {
                movies.map( (movie) => {
                    return (
                        // we want to make the posters clickable and navigate to a unique URL to respresent eac specific movie
                        <Link to={`/${movie.id}`} key={movie.id}>
                            <li> 
                                <img 
                                    src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` } 
                                    alt={ `{A poster for the movie ${movie.title}` }
                                    />
                            </li>
                        </Link>
                    )
                })
            }
        </ul>

        </section>
    )
}

export default MovieCatalogue;