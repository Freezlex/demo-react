
function QuestionGetApi(theme: number , level : number) {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw1 = JSON.stringify(theme);
    const raw2 = JSON.stringify(level);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: {theme :raw1 , levels : raw2},
        redirect: 'follow'
    };

    fetch("http://localhost:8080/questions/randomlygetbythemesandlevel {\"themes\" : [array de ints], \"levels\": [array de ints]}")
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


export default QuestionGetApi
