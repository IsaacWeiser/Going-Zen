import { Link } from "react-router-dom";
import "../nav/navbar.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

export const NavBar = () => {

    const history= useHistory()

    //this wil; handle the logic for the routing of the select options
    const route=(event)=>
    {
        const option = parseInt(event.target.value)
        console.log("opt "+option)
        if (option > 0 && option <4)
        {
            if(option === 1)
            {
                history.push(`/`)
                document.querySelector("#dropdown").value=0
            }
            else if(option === 2)
            {
                history.push(`/profile`)
                document.querySelector("#dropdown").value=0
            }
            else if (option === 3)
            {
                history.push(`/favorites`)
                document.querySelector("#dropdown").value=0
            }
            else if (option === 4)
            {
                window.localStorage.removeItem("zen_user")
                history.push('/')
                document.querySelector("#dropdown").value=0
            }
        }
    }

    return(
        <ul className="navbar">
            <li className="navbar__item active">
                <Link  className="navbar__link" to="/about">
                    About
                </Link>
            </li>
            <li className="navbar__item active">
                <Link  className="navbar__link" to="/profile">
                    <img id="profile--img" src="background/ZEN_ref.png"></img>
                </Link>
            </li>
            <li className="navbar__item active">
                    <select id="dropdown" onChange={(evt)=>{route(evt)}}>
                        <option id="profile-options" value="0">
                            Select an option
                        </option>
                        <option id="option--profile" className="profile-options" value="1">
                            Home
                        </option>
                        <option id="option--favorite" className="profile-options" value="2">
                        Profile
                        </option>
                        <option id="option--logout" className="profile-options" value="3">
                        Favorites
                        </option>
                        <option id="option--logout" className="profile-options" value="4">
                            Logout
                        </option>
                    </select>
            </li>
        </ul>
    )
}