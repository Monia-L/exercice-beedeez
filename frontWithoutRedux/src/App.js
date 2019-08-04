import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search'

class App extends Component {
  state = {
    data: [],
    loading: true,
    search: "",
  }

  getAllCapsules = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV
    const caps = await axios.get(`${pathApi}`)
    await this.setState({ data: caps.data.results, loading: false })
  }
  searchQuery = (e) => {
    this.setState({ search: e.target.value })
    console.log(this.state.search);
  }

  componentDidMount = () => {
    this.getAllCapsules()
  }
  render() {
    const { data } = this.state
    if (this.state.loading) {
      return (<div>Loading...</div>)
    }
    return (
      <div className="col">
        <Search />
        <button onClick={this.searchQuery} >Trouver !</button>
        {data.map(list => {
          return (
            <div className="contact-section">
              <div className="contact-container">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title" key={list._id} > {list.title} </h3>
                    <p className="card-text"> {list.summary}</p>
                    <div className="card-subtitle">
                      <a href="https://www.beedeez.com/" className="btn btn-primary">Plus d'infos</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <img src= {list.images[4]._id} alt={list.images[4].filename}/>  */}
            </div>
          )
        })}
      </div>
    )
  }
}
export default App
