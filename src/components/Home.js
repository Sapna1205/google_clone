import React, {useState} from 'react';
import { FaSearch,FaMicrophone } from "react-icons/fa";
import "./Home.css";

const Home = (props) => {
    const [state, setstate] = useState("");
    const searchGoogle= (e) => {
        props.history.push({pathname: "/search", state});
    }
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__logo">
                    <img src="/images/googlelogo.png" alt="google image" />
                </div>
                <form className ="home__form" onSubmit={searchGoogle}>
                   <FaSearch className="search__icon"/>
                   <FaMicrophone className="microphone__icon" />
                   <input type="text" className="home__input" value={state} onChange={(e)=> setstate(e.target.value) } />
                   <div className="home__group">
                       <input className="btn" type="submit" value="Google search" required/>
                       <input className="btn" type="submit" value="I'm Feeling Lucky" required />
                   </div>

                </form>
            </div>
            
        </div>
    )
}

export default Home;
