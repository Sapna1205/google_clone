import React from 'react';
import './Show.css';

const Show = (props) => {
    const{results, info} = props;
    
    return (
    <div className="show" > 
        <div className= "show__info" >
           About {info.formattedTotalResults} results ({info.formattedSearchTime} seconds) 
        </div>
        {results.length > 0 ? results.map(result =>(
            <div className="show__results">
                <div className="show__link"><a href={result.displayLink}>  {result.displayLink} </a> </div>
                <div className="show__title"><a href={result.link}> {result.title} </a></div> 
                <div className="show__description">
                    <p>
                        {result.snippet}
                    </p>
                </div>
            </div>  
        )) : "" }
    </div>     
    );
};

export default Show;
