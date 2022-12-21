console.log("working"); 

const $correctAnswers = ['A','B','C','D'];
const $result = $('.result');
const $start = $('#start-btn');




$start.on('click', ()=>{
$.get('/questions').then( (data)=>{
        console.log(data);

        for(let i = 0; i <= 1; i++){
            //
            console.log(data[0].question);
            console.log(data[0].answer_1);
            console.log(data[0].answer_2);
            console.log(data[0].answer_3);
            console.log(data[0].answer_4);
            //CREATING HTML ELEMENTS
            const $wrapper = $('.content-wrapper');
            const $form = $('.quiz-form');

            const $question_wrapper = $('.question');
            const $question_text  = $(`<h2>${data[i].question}</h2>`);

            const $grid_item = $('.grid-item');
            
            const $input1 = $('<input type ="radio" name="q1" value = "A" id="q1">');
            const $label1 =$(`<label for="q1" class="label">${data[i].answer_1}</label>`)
            const $input2 = $('<input type ="radio" name="q2" value = "B" id="q2">');
            const $label2 =$(`<label for="q2" class="label">${data[i].answer_2}</label>`)
            const $input3 = $('<input type ="radio" name="q3" value = "C" id="q3">');
            const $label3 =$(`<label for="q3" class="label">${data[i].answer_3}</label>`)
            const $input4 = $('<input type ="radio" name="q4" value = "D" id="q4">');
            const $label4 =$(`<label for="q4" class="label">${data[i].answer_4}</label>`)
            const $btn1 = $('<input type="submit" class="btn" value="Next Question">')
            //
            $form.removeClass("hide");
            $start.addClass("hide");
            //APPENDING ELEMENTS
            $wrapper.append($form);
            $form.append($question_wrapper);
            $question_wrapper.append($question_text);
            $form.append($grid_item);
            $grid_item.append(
                $input1,
                $label1,
                $input2,
                $label2,
                $input3,
                $label3,
                $input4,
                $label4,
            )
            $form.append($btn1);
            break;



        }
    });
});

let $score = 0;
const $currentScore = $('.iq-number');
$btn.on('click', () =>{

    const $userAnswers = [$form.q1.val, $form.q2.val, $form.q3.val, $form.q4.val];
    $userAnswers.forEach((answer, index)=>{
        if(answer === $correctAnswers[index]){
            $score+=25;

        }
    })

});

