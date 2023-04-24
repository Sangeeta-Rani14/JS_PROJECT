const question=[{
    'ques':'The content of the page (such as your pictures, text, links) will show up here.',
    'a':'body',
    'b':'head',
    'c':'folder',
    'd':'style',
    'correct':'a',
},
{
    'ques':'The default link color for hyperlinks',
    'a':'green',
    'b':'purple',
    'c':'blue',
    'd':'red',
    'correct':'d',
},
{
'ques':'Which tag is used to underline text?',
    'a':'<ul>',
    'b':'<b>',
    'c':'<u>',
    'd':'<a>',
    'correct':'c',
}]
let index=0;
let total=question.length;
let right=0;
let wrong=0;

const quesbox=document.getElementById('questionbox');
const optioninputs=document.querySelectorAll(".option");

const loadquestion=()=>{
        const data=question[index];
        console.log(data);

        quesbox.innerText= `${index+1}.  ${data.ques}`;
        optioninputs[0].nextElementSibling.innerText=data.a;
        optioninputs[1].nextElementSibling.innerText=data.b;
        optioninputs[2].nextElementSibling.innerText=data.c;
        optioninputs[3].nextElementSibling.innerText=data.d;
        

}

document.querySelector("#Submit").addEventListener(
    "click",
    function() {
        const data = question[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            wrong++;
        }
        index++;
        loadquestion()
        return;
    }
)

const getAnswer = () => {
    let ans;
    optioninputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}


loadquestion();