const currentDay = $(`#currentDay`);
let today = moment().format(`dddd, MMMM Do`);
let todayIs = (`Today is: ` + today);
currentDay.text(todayIs);
let currentTime = moment().hour()
console.log('currentTime: ', currentTime);
const time = $(`.time-block`);
const description = $(`.description`);
const saveBtn = $(`.saveBtn`);


description.each(function() {
    if (currentTime === ($(this).parent().attr(`id`))){
        $(this).addClass(`present`);
    } else if (currentTime > ($(this).parent().attr(`id`))){
        $(this).addClass(`past`);
        } else if (currentTime < ($(this).parent().attr(`id`))){
            $(this).addClass(`future`);
        };
    });

    saveBtn.on(`click`, function(){
        let text = $(this).siblings(`.description`).val();
        let time = $(this).parent().attr(`id`);
        localStorage.setItem(time, text);
    });

    $(this).siblings(`description`).val(localStorage.getItem(time, text))
