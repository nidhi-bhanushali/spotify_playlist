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
    .then(tokenResponse => setToken(tokenResponse.data.access_token));
    }, [])

    return ( 
        <div>
            
        </div>
    )
}

export default GetPlaylist
