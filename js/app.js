let questions = [{
        'que': 'Which of the following is markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which year was JavaScript launched', 
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b'
    }]

let index = 0
let right = 0, wrong = 0
let total = questions.length
const quesBox = document.getElementById('quesBox')
const optionItems = document.querySelectorAll('.options')

function loadQuestion() {
    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`
    optionItems[0].nextElementSibling.innerText = data.a
    optionItems[1].nextElementSibling.innerText = data.b
    optionItems[2].nextElementSibling.innerText = data.c
    optionItems[3].nextElementSibling.innerText = data.d
}

function submitQuiz() {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

function getAnswer() {
    let res;
    optionItems.forEach(
        (input) => {
            if (input.checked) {
                res = input.value
            }
        }
    )
    return res;
}

function reset() {
    optionItems.forEach(
        (input) => {
            input.checked = false;
        }
    )
    return;
}

function endQuiz() {
    document.getElementById("box").innerHTML = `
        <h3> Thank you for playing the quiz! </h3>
        <h2> ${right} / ${total} are correct </h2>
    `
}

loadQuestion();