export const GET_LIST = 'GET_LIST'

export function getList(){
    return (dispatch) => {
         fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
        dispatch({ type: GET_LIST, payload: json });
          return json.movies;
        })
        .catch((error) => {
          console.error(error);
        });
      };
}