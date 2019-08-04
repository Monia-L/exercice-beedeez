import React from 'react';
import { connect } from 'react-redux';
import { getAllCapsules } from '../actions';
import './Caps.css';



const mapStateToProps = state => ({

  capsules: state.showCapsules,
  loading: state.loading,

});

const mapDispatchToProps = dispatch => {
  return {
    axiosData: () => dispatch(getAllCapsules()),

  }
}

class Caps extends React.Component {


  componentDidMount() {
    this.props.axiosData();

  }

  render() {
    const { loading, capsules } = this.props;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>Capsules Beedeez</h1>
        {capsules.map(capsule => (
          <div className="contact-section">
            <div className="contact-container">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title" key={capsule._id}> {capsule.title} </h3>
                  <p className="card-text"> {capsule.summary}</p>
                  <div className="card-subtitle">
                    <a href="https://www.beedeez.com/" className="btn btn-primary">Plus d'infos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}

      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Caps);