import React from 'react'
import '../css/sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarOption from './SidebarOption';
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [{ playlists }, dispatch] = useStateValue();


    return (
        <div className='sidebar'>
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            /> <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {/* // Using JSX and Optional Chaining in case the playlist is empty  */}
            {playlists?.items?.map((playlist) => (
                // console.log(playlist.name)

                <SidebarOption title={playlist.name} />

            ))}
        </div>
    );
}

export default Sidebar