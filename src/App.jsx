import React, { useEffect, useState } from 'react';
import Player from './components/player/Player';
import Login from './components/login/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from "./store/StateProvider";
import {TYPES} from './store/type';

import './App.css';

const s = new SpotifyWebApi();

function App() {

    const [{ token }, dispatch] = useStateValue();

    useEffect(() => {
        // Set token
        const hash = getTokenFromResponse();
        window.location.hash = "";
        let _token = hash.access_token;

        if (_token) {
            s.setAccessToken(_token);

            dispatch({
                type: TYPES.SET_TOKEN,
                token: _token,
            })


            s.getMe().then((user) => {
                dispatch({
                    type: TYPES.SET_USER,
                    user,
                })
            })
        }
    }, [])

    return (
        // BEM
        <div className="App">
            {
                token ? (
                    <Player />
                ) : (
                    <Login />
                )
            }
        </div>
    );
}

export default App;
