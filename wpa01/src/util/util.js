export const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()).then((res) => { console.log(res) }).catch((err) => { console.log(err) });
}