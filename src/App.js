
import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""

    const _token = hash.access_token


    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });


      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });


      spotify.getPlaylist('6ehdSiG3d2TinBXr1r7ZK0').then(response => {

        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });


    }
    // console.log("The Token is ", token);
  }, [token, dispatch]);

  // console.log("The User is ", user);
  // console.log("The Token is ", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}

    </div>
  );
}

export default App;
