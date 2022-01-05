import React, {useState} from 'react';
import { FaSearch,FaMicrophone } from "react-icons/fa";
import './Search.css';
import axios from 'axios';
import {key, cx} from "../API";
import Show from './Show';

const Search = (props) => {
    const goBack= (e) =>{
        props.history.push("/");
    };
    const [state, setstate] = useState(props.location.state? props.location.state : "");
    const[results, setResults] = useState([]);
    const [info, setInfo] = useState('');   

    const searchGoogle = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
            if (response){
               setResults(response.data.items);
               setInfo(response.data.searchInformation); 
            }
        }
        catch(error){
            console.log(error);
        }};
   console.log(results, info);

   React.useEffect(()=>{
       async function getPosts(){
           if (props.location.state){
            try{
                const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
                if (response){
                   setResults(response.data.items);
                   setInfo(response.data.searchInformation); 
                }
            }
            catch(error){
                console.log(error);
            }
           }
       }
       getPosts();
   }, []);
    

    return (
        <div className="search">
            <div className="search__container">
                <div className="search__logo">
                    <img src="/images/googlelogo_small.png" alt="logo" className="s_logo" onClick={goBack}/>
                </div>
                <div className ="search__form"  >
                    <form onSubmit={searchGoogle} >
                    <FaSearch className="search__iconS"/>
                    <FaMicrophone className="microphone__iconS" />
                    <input type="text" className="search__input" value={state}  onChange={(e) =>setstate(e.target.value) } required />
                    </form>
                </div>
            </div>
           <div className="line">
             <hr style={{color:'red'}}  />
           </div>
           <div className="showR">          
            <Show  results={results} info={info} />
            </div> 
        </div>
    );
};

export default Search;
