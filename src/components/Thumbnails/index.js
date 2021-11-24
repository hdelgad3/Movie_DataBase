import React from "react";

import {Image} from './Thumbnail.styles'

const Thumb = ({image, movieId, clickable}) => (
    <div>
        <Image src={image} alt='movie-thumbnail' />
    </div>
);

export default Thumb;