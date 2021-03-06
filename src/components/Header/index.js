import React, {useContext} from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';
import { Link } from 'react-router-dom';

import {Context} from '../../context';

const Header = () =>{

    const [user] = useContext(Context);

    return(

        <Wrapper>
            <Content>
                <Link to='/'>
                <LogoImg src={RMDBLogo} alt='RMDB-Logo' />
                </Link>
                {user ? (<span>Logged in as: {user.username}</span>) : (<Link to='/login'><span>Log in</span> </Link>)}
                <TMDBLogoImg src={TMDBLogo} alt='TMDB-Logo' />
            </Content>
        </Wrapper>
    );
};

export default Header;