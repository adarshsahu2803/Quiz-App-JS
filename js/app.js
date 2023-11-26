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
const quesBox = document.getElementById('quesBox')
const optionItems = document.querySelectorAll('.options')

function loadQuestion() {
    let data = questions[index]
    console.log(data)
    quesBox.innerText = `${index+1}) ${data.que}`
    optionItems[0].nextElementSibling.innerText = data.a
    optionItems[1].nextElementSibling.innerText = data.b
    optionItems[2].nextElementSibling.innerText = data.c
    optionItems[3].nextElementSibling.innerText = data.d
}

loadQuestion();