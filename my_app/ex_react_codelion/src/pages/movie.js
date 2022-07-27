import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { getMovie } from '../movie_data';
const Movie = () => {
    const Params = useParams();
    // console.log(Params);

    const movie = getMovie(parseInt(Params.movieId))
    //  console.log(movie);
 
    //쿼리 스트링 사용하기 
    const location = useLocation();
    // console.log(location);

    const [searchParams , setSearchParams] = useSearchParams('');
    const detail = searchParams.get('detail');
    const handClick = () => { 
        setSearchParams({detail : detail === "true" ? false : true});
        console.log(detail);
    }

    return (
        
        <div>상세페이지입니다.
        <p>감독 : {movie.director} </p>
        <p>카테고리 : {movie.category} </p>
        <button type="botton" onClick={handClick}>자세히</button>
        {detail === "true" ? <p>{movie.detail}</p> : " "}; 
        </div>
    );
};

export default Movie;