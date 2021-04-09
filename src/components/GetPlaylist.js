import React , {useState , useEffect} from 'react'
import GetLocalPlaylists from './GetLocalPlaylists';

const GetPlaylist = ({playlist , userPlaylists , setUserPlaylists}) => {
    console.log(userPlaylists)
const handleClick = (e) => {
    const newPlaylist =  {
        id: `${e.target.id}`,
        name : `${e.target.value}`,
        value : `${e.target.name}`
    };
        const newUserPlaylists = [...userPlaylists , newPlaylist]
        setUserPlaylists(newUserPlaylists)
        console.log(userPlaylists)
        localStorage.setItem('playlists' , JSON.stringify(newUserPlaylists))
        
    
}

    return ( 
        <div className = 'container d-flex'>
        <div>
            {playlist && playlist.map((playlist) => ( 
             <div key = {playlist.id} className = 'card m-5'>   
                <h2 
                className='card-title text-center mt-4'
                style={{color:'#1db954'}}>
                        {playlist.name}
                </h2>
                <img className='card-body' 
                src = {playlist.images[0].url} 
                alt= 'playlist'
                style={{width:300 , height: 300}}
                ></img>
                <button style = {{background : '#1db954'}} 
                className='btn btn-block'
                onClick = {handleClick}
                id={playlist.id} value = {playlist.images[0].url} name={playlist.name}
                >
                Add to Local</button>
            </div>
            ))}
        </div>
        <div>
            <GetLocalPlaylists userPlaylists = {userPlaylists}/>
        </div>
        </div>
    )
}

export default GetPlaylist