import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'

class App extends Component {
  state = {
    data: [],
    loading: true,
  }

  // getAllCapsules = async () => {
  //   let pathApi = process.env.REACT_APP_PATH_API_DEV
  //   const caps = await axios.get(`${pathApi}`)
  //   await this.setState({ data: caps.data.results, loading: false })
  // }

  getAllCapsules = async () => {
   await axios("http://localhost:3005/beedeez/all")
    //.then(response => response)
    .then(data => {
      this.setState({
        data: data.data.results,
        loading: false 
      });
    });
    
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
        <div>
          <SearchBar />
        </div>
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
              {/* <img src= {list.images[4].url} alt={list.images[4].filename}/>  */}
            </div>
          )
        })}
      </div> 
    )
  }
}
export default App
