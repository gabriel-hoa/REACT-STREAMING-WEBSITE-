import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Oval} from 'react-loader-spinner';
import Subscribe from './Subscribe';
import {NavLink} from 'react-router-dom';


function Banner() {
    let [bannerMovie, setBanner] = useState("");

  
  useEffect(function() {
    (function() {
      axios
            .get
            ('https://api.themoviedb.org/3/trending/all/week?api_key=c00e89eeab1e8771bea90e348523be5f')
            .then((res) => { 
            setBanner(res.data.results[0]);
        })
        
    })()

    }, [])
  

  return (
    
       <>
            {
                bannerMovie == "" ?
                    <div className="
                    flex justify-center"><Oval
                        height="80"
                        width="80"
                        radius="9"
                        color="gray"
                        secondaryColor='gray'
                        ariaLabel="loading"

                    /></div>
                    :
                    <div className={`
                    h-[40vh] md:h-[80vh] 
                    bg-center bg-cover 
                    flex items-end relative
            
                    `}
                        style={{
                            backgroundImage:
                                `url(
                                    https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie.backdrop_path})`
                        }}
                    >   
                        <div
                            className="text-xl flex items-end justify-center md:text-xl text-white bg-gray-900 bg-opacity-30 py-4 text-center w-full"
                        >{bannerMovie.title}</div>
                    </div>
            }
                    
                        <h3 className='flex justify-center bg-black ustify-center text-white py-2 text-sm '
            >Unlimited Movies for only £6,99/month</h3>
            <h5 className='flex justify-center bg-black text-white text-sm' 
            >7-day free trial-
                <NavLink to="/subscribe"> 
                <u className='cursor-pointer hover:text-sky-700'>Subscribe Now!</u> 
                </NavLink></h5>
               

        
        
         
        </>

  )
}

export default Banner;