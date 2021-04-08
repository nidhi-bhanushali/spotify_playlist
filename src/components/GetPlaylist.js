import React , { useState , useEffect } from 'react'
// import {getToken} from './apis'
import { Credentials } from '../credentials'
import axios from 'axios';

const spotify = Credentials();


const GetPlaylist = () => {
    const [token, setToken] = useState('');
    const [playlist , setPlaylist] = useState([])

    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
        setToken(tokenResponse.data.access_token)
        axios('https://api.spotify.com/v1/browse/featured-playlists' , {
        method: 'GET',
        headers: {'Authorization' : `Bearer ${tokenResponse.data.access_token}`}
    })
    .then(({data}) => setPlaylist(data.playlists.items))
    } );

    
    }, [])

    return ( 
        <div>
            {playlist && playlist.map((playlist) => ( 
             <div key = {playlist.id}>   
            <h2 >{playlist.name}</h2>
                <img src = {playlist.images[0].url} alt= 'playlist'></img>
            </div>
            ))}
        </div>
    )
}

export default GetPlaylist
