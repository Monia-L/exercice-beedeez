import axios from 'axios';


export function loading(bool) {
  return {
    type: 'LOADING',
    loading: bool
  };
}


export function getAllCapsules() {
  return dispatch => {
    dispatch(loading(true));

    axios.get("http://localhost:3005/beedeez/all")
      .then((res) => {

        dispatch(loading(false));
        return res;
      })
      .then(capsules => dispatch(showCapsules(capsules.data.results
      )))
  };
}


export function showCapsules(capsules) {
  return {
    type: 'SHOW_CAPSULES',
    capsules
  }
}


export default { loading, getAllCapsules, showCapsules }