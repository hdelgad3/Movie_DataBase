import React from "react";

import {Image} from './Thumbnail.styles'
import { Link } from "react-router-dom";

type Props = {
    image: string,
    movieId?: number,
    clickable: boolean
}

const Thumb: React.FC<Props> = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumbnail' />
            </Link>
        ) : ( <Image src={image} alt='movie-thumbnail' /> )}
    </div>
);

export default Thumb;