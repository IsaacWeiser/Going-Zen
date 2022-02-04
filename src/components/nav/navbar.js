import { Link } from "react-router-dom";
import "../nav/navbar.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
                history.push(`/profile`)
            }
            else if (option === 2)
            {
                history.push(`/favorites`)
            }
            else if (option === 3)
            {
                window.localStorage.removeItem("zen_user")
                history.push('/')
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
                    <img id="profile--img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2F67de%2Fth%2Fpre%2Fi%2F2013%2F005%2F7%2F9%2Fcircle_profile_by_pdogkasper-d5qkroq.png&f=1&nofb=1"></img>
                </Link>
            </li>
            <li className="navbar__item active">
                    <select onChange={(evt)=>{route(evt)}}>
                        <option id="profile-options" value="0">
                            Select an option
                        </option>
                        <option id="option--profile" className="profile-options" value="1">
                            Profile
                        </option>
                        <option id="option--favorite" className="profile-options" value="2">
                            Favorites
                        </option>
                        <option id="option--logout" className="profile-options" value="3">
                            Logout
                        </option>
                    </select>
            </li>
        </ul>
    )
}