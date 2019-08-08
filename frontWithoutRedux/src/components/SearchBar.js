import React, { Component } from "react"
import axios from 'axios';

const events = [
    {
        "firstName": "David",
        "lastName": "Martin",
        "date": "2019-02-09",
        "content": "Je me baladais avec mon fils dans le parc, et nous avons vu une dame tomber au sol d'un seul coup. Nous avons donc appelé les secours, qui sont intervenus rapidement et ont sauvé la victime !"
    },
    {
        "firstName": "Alice",
        "lastName": "Lagarde",
        "date": "2019-02-06",
        "content": "J'ai «sauvé» mon mari d'une brûlure simple alors qu'il sortait un plat du four : le doigt sous l'eau tempérée jusqu'à ce qu'il n'ait plus mal, et voilà le travail ! Si vous l'aviez entendu crier, quelle chochotte..."
    },
    {
        "firstName": "David",
        "lastName": "Favre",
        "date": "2019-02-03",
        "content": "J'ai mis en PLS deux de mes amis qui avaient trop bu quand j'étais encore étudiant. Heureusement, j'étais sobre car je préparais le marathon (je l'ai fini en 3h45) !"
    }
]


class SearchBar extends Component {

    state = {
        searchResult: [],
        data: []
    }

    getAllCapsules = async () => {
        let pathApi = process.env.REACT_APP_PATH_API_DEV
        const caps = await axios.get(`${pathApi}`)
        await this.setState({ data: caps.data.results })
    }

    componentDidMount() {
        this.getAllCapsules()
        // console.log(this.state);
    }

    renderResults = () => {
        const results = this.state.searchResult

        if (results.length === 0) {
            return (<div>search no found</div>)
        }
        return (
            results.map(list => {
                return (
                    <div className="contact-section">
                        <div className="contact-container">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title" key={list._id} > {list.title} </h3>
                                    <p className="card-text"> {list.summary}</p>
                                    {/* <img src= {list.images[4].url} alt={list.images[4].filename}/>  */}
                                    <div className="card-subtitle">
                                        <a href="https://www.beedeez.com/" className="btn btn-danger">Plus d'infos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }


    handleSearch = (e) => {
        const targetValue = e.target.value.toLowerCase()
        this.setState({ searchResult: this.state.data.filter(event => event.title.toLowerCase().includes(targetValue)) })

    }

    render() {
        console.log(this.state);
        return <div>
            <div>

                <div className='modalWrapper'>
                    <input placeholder='Recherche...' className='inputModal' onBlur={this.handleSearch}></input>
                </div>
                <div>
                    {this.renderResults()}
                </div>
            </div>
        </div>

    }
}

export default SearchBar