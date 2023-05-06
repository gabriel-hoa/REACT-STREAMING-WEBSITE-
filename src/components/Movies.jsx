import React, { useEffect, useState } from 'react';
import axios from "axios";
import Pagination from './Paginations';
import { Oval } from "react-loader-spinner";
import ReactPlayer from 'react-player/youtube';
import movieTrailer from 'movie-trailer';


function Movies() {
    let [movies, setMovies] = useState([]);
    let [pageNum, setPage] = useState(1);
    let [trailerUrl, setTrailerUrl] = React.useState("");
    let [search, setSearch] = React.useState("");

    let searchs = movies.filter((movie) => movie.name || movie.title);
   

    let handleOnClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie.title || movie.name || movie.original)
                .then((url) => {
                    setTrailerUrl(url);
                });
        }

    };

    
    useEffect(function () {
        console.log("useEffect again");
        (function () {
            axios
            .get('https://api.themoviedb.org/3/trending/all/day?api_key=c00e89eeab1e8771bea90e348523be5f&page=1' + pageNum)
                .then((res) => {
                    
                    setMovies(res.data.results);
                    setSearch(res.data.result);
                })
        })()
    }, [pageNum])

    const onPrev = () => {
        if (pageNum > 1) {
            setPage(pageNum - 1);
        }
    }
    const onNext = () => {
        setPage(pageNum + 1);

    }


    console.log(search);

    
    return (
        <div className="py-2 bg-black">
            <div className='flex justify-center'>
             <input type='search' value={search} onChange={(e)=> setSearch(e.target.value)}
              className="text-center rounded-l rounded-r opacity-90 p-3 m-4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Search Movie"
              />
            
        </div>
            <div className='flex justify-center relative'> 
                {trailerUrl && <ReactPlayer url={trailerUrl} playing={true}/>}
            </div>
        <div className='py-2 bg-black text-white text-sm flex justify-center'>
            <h3><u>One click for trailer - Double click for movie</u></h3>

        </div>
            <Pagination 
                pageNum={pageNum}
                onPrev={onPrev}
                onNext={onNext}
            ></Pagination>
             
        <div className="flex
            flex-wrap
           justify-center
            bg-black
            ">
                {
                    movies.length == 0 ? <Oval
                    height="80"
                    width="80"
                    radius="9"
                    color="gray"
                    secondaryColor='gray'
                    ariaLabel="loading"
                        
                    
                    /> : movies.map((movie) => {
                        
                        
                        return <div
                        onClick={() => handleOnClick(movie)}
                        key={movie.id}
                        className="
                        bg-center bg-cover 
                        w-[160px]
                        h-[30vh]
                        md: h-[40vh]
                        md:w-[180px]
                        m-4
                        rounded-xl
                        hover:scale-125
                        duration-300
                        flex items-end 
                        relative
                      
                        "
                    style={{
                        backgroundImage:
                        `url(
                            https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`
                            
                        }}
                        
                        >
                        
                            <div
                                className="p-2
                                bg-gray-900
                                absolute top-2 right-2
                                rounded-xl
                                "
                                >

                            </div>
                            <div
                                className="
                                font-bold text-white
                                bg-gray-900 bg-opacity-50
                                p-1
                                text-center
                                w-full
                                rounded-b-xl
                                "> 
                                {movie.title || movie.name || movie.original}</div>
                                
                            </div>
                    })
                
                }
                            </div>
                

            <Pagination
                pageNum={pageNum}
                onPrev={onPrev}
                onNext={onNext}
            ></Pagination>
        </div >
    )
}

export default Movies;