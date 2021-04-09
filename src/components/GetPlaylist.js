import React , {useState} from 'react'

const GetPlaylist = ({playlist}) => {
    let [localPlaylist , setLocalPlaylist] = useState([]);
    localPlaylist = [...localPlaylist , JSON.parse(localStorage.getItem('playlists'))]

const handleClick = (e) => {
    const newPlaylist = e.target.value;
    localPlaylist = [...localPlaylist , newPlaylist]
    localStorage.setItem('playlists' , JSON.stringify(localPlaylist))
}

    return ( 
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
                id={playlist.id} value = {playlist.name}
                >
                Add to Local</button>

            </div>
            ))}
        </div>
    )
}

export default GetPlaylist
