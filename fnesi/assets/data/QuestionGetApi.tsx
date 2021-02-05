
function QuestionGetApi(theme: number) {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(theme);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/test/theme")
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


export default QuestionGetApi
