import React, { useState } from "react";

function Searchbar () {
    const [term, setTerm] = useState('');
    const search = () => {
        console.log("szukaj", term);
    }
    const updateTerm = (e) => {
        setTerm(e.target.value);
    }
    const onKeyDownHandler = (e) =>{
        if(e.key === 'Enter'){
            search();
        }
    }

    return(
        <div className="d-flex">
            <input 
                value={term}
                onKeyDown={onKeyDownHandler}
                onChange={e => setTerm(e.target.value)}
                className="form-control"
                type="text" 
                placeholder='Szukaj...' 
            />
            <button 
                onClick={search}
                className="btn btn-primary">Szukaj
            </button>
        </div>
    )
}

export default Searchbar;