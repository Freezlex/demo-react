
function QuestionLocal() {

    const DATA = [
        {
            question: "Que signifie le terme : asthénie ?",
            answers: [
                {id: "1", text: "Rotule"},
                {id: "2", text: "Saignement du nez"},
                {id: "3", text: "Saignement de l'oreille"},
                {id: "4", text: "Fatigue", correct: true}
            ]
        },
        {
            question: "Que signifie le préfixe : brady?",
            answers: [
                {id: "1", text: "En dehors"},
                {id: "2", text: "Lent", correct: true},
                {id: "3", text: "A l'intérieur"},
                {id: "4", text: "Autour "}
            ]
        },
        {
            question: "Que signifie le préfixe : hypo?",
            answers: [
                {id: "1", text: " Au dessous, diminution", correct: true},
                {id: "2", text: "Auprès de, contre, à travers, voisin"},
                {id: "3", text: "Beaucoup, plusieurs"},
                {id: "4", text: "Rapide"}
            ]
        },
        {
            question: "Que signifie le terme : cyanosé  ?",
            answers: [
                {id: "1", text: "Peur de l'eau"},
                {id: "2", text: "Coloration bleutée de la peau et des ongles", correct: true},
                {id: "3", text: "Se parler à soi-même"},
                {id: "4", text: "Ralentissement psychopathologique du cours de la pensée"}
            ]
        },
        {
            question: "Que signifie le terme : pyrogène ?",
            answers: [
                {id: "1", text: "Ablation / Enlever"},
                {id: "2", text: "Ecoulement"},
                {id: "3", text: "Qui provoque de la fièvre", correct: true},
                {id: "4", text: "Diminution de la quantité de thrombocytes"}
            ]
        },
    ];
    return DATA;

}
export default QuestionLocal
