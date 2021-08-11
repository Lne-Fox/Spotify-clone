import './index.css';
import React from 'react';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a3fc8d9b758a4a39aaf147d6a36bdda5&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state' 

function Login() {
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div>
            </div>
           <div className="w-50 h-30 bg-green-500 p-5 text-center font-semibold text-white rounded-full hover:bg-green-600 cursor-pointer transition duration-150 ease-out">
               <a href={AUTH_URL}>Login With spotify</a>
           </div>
        </div>
    )
}

export default Login
