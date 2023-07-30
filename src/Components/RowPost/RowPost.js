
import React,{useEffect,useState} from 'react'
import './RowPost.css';
import axios from '../../axios';
import Youtube from 'react-youtube';
import {API_KEY, imageUrl} from '../../constants/constants'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setmovies(response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`/movie/${id} /videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results!==0){
        setUrlId(response.data.results[0])
      }
    })
console.log(id);
  }
  
  return (
    <div className='row' >
      <h2>{props.title} </h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src= {`${imageUrl+obj.backdrop_path}`} alt=' '  />
        )} 
      </div>
      { urlId && <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}
export default RowPost
