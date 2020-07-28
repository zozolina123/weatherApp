const fetchAutoComplete = (input: String) => {
    return fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+input+'&types=(regions)&language=en&key=AIzaSyDUhqTD2-hLXp1_0WfN4QHDddJ8c_nwMxA',
    { 
        method: 'GET',
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Methods':'POST, GET'
        }
      })
    .then(response => response.json());
} 

export {fetchAutoComplete}