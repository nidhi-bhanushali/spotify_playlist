import GetPlaylist from './components/GetPlaylist';
import GetLocalPlaylists from './components/GetLocalPlaylists'
import React , { useState , useEffect } from 'react'
// import {getToken} from './apis'
import { Credentials } from './credentials'
import axios from 'axios';

const spotify = Credentials();

function App() {
  const [token, setToken] = useState('');
    const [playlist , setPlaylist] = useState([]);
    const [userPlaylists , setUserPlaylists] = useState([]);

    useEffect(() => {
        const userPlaylistEl = JSON.parse(localStorage.getItem('playlists'));
        if(userPlaylistEl){
            console.log(userPlaylistEl)
            setUserPlaylists(userPlaylistEl)
        }
    }, [])

    

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
    <div className="container d-flex">
      <div style={{width : 400}}>
        <GetPlaylist playlist = {playlist} 
        userPlaylists = {userPlaylists}
        setUserPlaylists = {setUserPlaylists}/>
      </div>
      <div>
      {/* <GetLocalPlaylists/> */}
      </div>
      
    </div>
  );
}

export default App;