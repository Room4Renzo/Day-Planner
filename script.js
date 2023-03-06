const currentDay = $(`#currentDay`);
const today = moment().format(`dddd, MMMM Do`);
const todayIs = (`Today is: ` + today);
currentDay.text(todayIs);
const currentTime = moment().hour()
console.log('currentTime: ', currentTime);
const time = $(`.time-block`);
const description = $(`.description`);
const saveBtn = $(`.saveBtn`);


description.each(function () {
    if (currentTime === ($(this).parent().attr(`id`))) {
        $(this).removeClass(`past`);
        $(this).removeClass(`future`);
        $(this).addClass(`present`);


    } else if (currentTime > ($(this).parent().attr(`id`))) {
        $(this).removeClass(`present`);
        $(this).removeClass(`future`);
        $(this).addClass(`past`);

    } else if (currentTime < ($(this).parent().attr(`id`))) {
        $(this).removeClass(`past`);
        $(this).removeClass(`present`);
        $(this).addClass(`future`);
    };
});

saveBtn.on(`click`, function () {
    let text = $(this).siblings(`.description`).val();
    let time = $(this).parent().attr(`id`);
    localStorage.setItem(time, text);
});

$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#1 .description').val(localStorage.getItem('1'));
$('#2 .description').val(localStorage.getItem('2'));
$('#3 .description').val(localStorage.getItem('3'));
$('#4 .description').val(localStorage.getItem('4'));
$('#5 .description').val(localStorage.getItem('5'));