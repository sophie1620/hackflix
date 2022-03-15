// MovieInfo.js

import axios from "axios";
import { useEffect, useState } from 'react';

// we want to use the movieId which is currently in the url (at which this component renders) withiour axios call
// in order to grab information from a URL (when using Router) we can use useParams Hook
import { useParams} from 'react-router-dom';

function MovieInfo() {

    // console.log(useParams());
    // because we passed :movieId as a 'parameter' to access this element, it saves it as a 'useParam' and allows us to access the value

    // Call useParams hook and extract the movieId propery from within the params object it returns
    const { movieId: movie_id } = useParams();
        // call the useParams function, and we now what it returns
            // So from the object that it returns, we use destructuring to rename the object property

    
    // set up useState
    const [ details, setDetails] = useState({})

    // use axios to make a request to the movie id endpoint
    useEffect( () => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`, 
            params: {
                api_key: '67961b92f8c2648375eeecd2345a8418'
            }
        }).then ( (apiData) => {
            // console.log(apiData.data);

            setDetails(apiData.data);
        })
    }, [])

    console.log(details)

    return (
        <section className="poster">

            <div className="description">
                <h3>{ details.tagline }</h3>

                <h2>{ details.title }</h2>

                <p>{ details.overview }</p>

            </div>

            <div className="poster-image">
                {
                    // ternery here for if there is this then do 
                    // this Just be like, hey? Does details exist is details more than an empty object if it's an empty object, don't render this if it is an empty object, or if it sorry if it isn't empty object don't render this if it isn't an empty object then render this So what's happening? The first time around is it's like oh an image i'm gonna render it. This doesn't exist. this value of poster path doesn't exist. That's an undefined so I don't have a poster to give you. But immediately after the component renders it runs the use effect, and it's like great.

                }

                <img 
                    src={ details.poster_path ?  `https://image.tmdb.org/t/p/w500${details.poster_path}` : ""} 
                    alt={`a movie poster for ${details.original_title}`} 
                    />
            </div>
        </section>
    )
}

export default MovieInfo