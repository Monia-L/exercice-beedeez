import React from 'react';
import './App.css';


const Search = () => {

    return (
        <div>
            <form>
                <label htmlFor="site-search">Rechercher une capsule</label>
                <input type="search" className="form-control ds-input col-3" placeholder="Rechercher" aria-label="Search through site content" />
            </form>

        </div>

    )
}

export default Search