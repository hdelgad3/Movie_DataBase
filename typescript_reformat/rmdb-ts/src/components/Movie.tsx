import React from "react";
import { useParams } from "react-router-dom";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// components
import Grid from './Grid';
import Spinner from './Spinner'
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from './MovieInfoBar'
import Actor from "./Actor";
// hook
import { useMovieFetch } from "../hooks/useMovieFetch";

//image
import NoImage from '../images/no_image.jpg';
import { string } from "prop-types";

const Movie: React.FC = () => {
    const {movieId} = useParams();
    const {state, loading, error} = useMovieFetch(Number(movieId));

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={state.original_title} />
            <MovieInfo movie={state} />
            <MovieInfoBar time={state.runtime} budget={state.budget} revenue={state.revenue} />
            <Grid header='Actors'>
                {state.actors.map(actor=> (
                    <Actor key={actor.credit_id} name={actor.name} character={actor.character} 
                    imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`: NoImage}
                /> ))}
            </Grid>
        </>
    );
};

export default Movie;