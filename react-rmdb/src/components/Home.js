import React, {useState, useEffect} from 'react';
//Api
import API from '../API';

//config
import  {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
//components

//Hook

//Image
import NoImage from '../images/no_image.jpg';

const Home = () =>{

    //destructuring states (hook)
    const [state,setState] = useState();
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    
    const fetchMovies = async (page, searchTerm='')=>{
        try{
            setError(false);
            setLoading(true);
            
            //fetches movies
            const movies = await API.fetchMovies(searchTerm, page); 

            setState(prev=>({
                ...movies, results: 
                page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

        }
        catch(error){
            setError(true);
        }
        setLoading(false);
    };

    //Initial render.
    useEffect(()=>{
        fetchMovies(1);
    }, [])

    return(
        <div>Home Page</div>
    );
};

export default Home;