import React from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';
import { Link } from 'react-router-dom';



const Header: React.FC = () =>{
    return(

        <Wrapper>
            <Content>
                <Link to='/'>
                <LogoImg src={RMDBLogo} alt='RMDB-Logo' />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt='TMDB-Logo' />
            </Content>
        </Wrapper>
    );
};

export default Header;