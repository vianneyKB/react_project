const getData = () => {
    // call the API and limiting the number of requests to 9 items
    return fetch("https://jsonplaceholder.typicode.com/album/1/photos/?_limit=9");
}
export default getData;