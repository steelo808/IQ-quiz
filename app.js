console.log("working"); 

const $correctAnswers = ['A','B','C','D'];
const $form = $('.quiz-form');
const $result = $('.result');
const $start = $('#start-btn');



$start.on('click', ()=>{
    console.log("clicks");
    // fetch("/questions").then((res)=>{
    //     // console.log(res);
    //     return res.json();
    // }).then((data)=>{
    //     console.log(data);
    // })

    $.get('/questions').then( (data)=>{
        console.log(data);
        console.log("here");
    })
    console.log("here2");
});



$form.on('submit', e =>{
    e.preventDefault();

    let $score = 0;

    const $userAnswers = [$form.q1.val, $form.q2.val, $form.q3.val, $form.q4.val];

    $userAnswers.forEach((answer, index)=>{
        if(answer === $correctAnswers[index]){
            $score+=25;
        }
    })


});

