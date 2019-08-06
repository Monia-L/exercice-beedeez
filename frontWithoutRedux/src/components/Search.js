import React, { Component } from 'react';
import './App.css';


class Search extends Component {
    state = {
        search: ""
    }
    searchQuery = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state.search);
    }

    render() {
        return (
            <div>
                <form>
                    {/* <label htmlFor="site-search">Rechercher une capsule</label> */}
                    <input
                        type="text"
                        name="search"
                        className="form-control ds-input col-3"
                        placeholder="Rechercher"
                        aria-label="Search through site content"
                        onChange={this.searchQuery}
                        value={this.state.search}
                    />
                </form>
                <p >Vous recherchez {this.state.search} ?</p>
                <button onClick = {function() {alert('WORK IN  PROGESS ...')}}> Oui !</button>


            </div>

        )
    }
}

export default Search