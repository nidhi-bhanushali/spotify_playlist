const GetLocalPlaylists = ({userPlaylists}) => {
    

    return (
        <div>
             {userPlaylists && userPlaylists.map((playlist , index) => ( 
             <div key = {index} className = 'card m-5'>   
                <h2 
                className='card-title text-center mt-4'
                style={{color:'#1db954'}}>
                        {playlist.value}
                </h2>
                <img className='card-body' 
                src = {playlist.name} 
                alt= 'playlist'
                style={{width:300 , height: 300}}
                ></img>
            </div>
            ))}
        </div>
    )
}

export default GetLocalPlaylists
