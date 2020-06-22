import * as types from '../constants/types'

export const getEvents = () =>
  dispatch =>
    fetch(process.env.REACT_APP_API_URL+'/event')
      .then(response => response.json())
      .then(response => {        
        dispatch({
          type: types.FETCH_EVENTS,
          payload: response.data
        })
      })
