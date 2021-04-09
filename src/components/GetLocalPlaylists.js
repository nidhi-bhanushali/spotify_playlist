import React , {useState , useEffect} from 'react'

const GetLocalPlaylists = () => {
    const [userplaylists , setUserPlaylists] = useState([]);

    useEffect(() => {
        const userplaylistEl = JSON.parse(localStorage.getItem('playlists'));
        if(userplaylistEl){
            console.log(userplaylistEl)
            setUserPlaylists(userplaylistEl)
        }
    }, [])

    return (
        <div style = {{background : 'white'}}>
            {userplaylists}
        </div>
    )
}

export default GetLocalPlaylists
