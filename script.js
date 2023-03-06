const currentDay = $(`#currentDay`);
const today = moment().format(`dddd, MMMM Do`);
const todayIs = (`Today is: ` + today);
currentDay.text(todayIs);
const currentTime = moment().hour()
const time = $(`.time-block`);
const description = $(`.description`);
const saveBtn = $(`.saveBtn`);

// Conditional to compare time and add style classes
description.each(function () {
    if (currentTime == ($(this).parent().attr(`id`))) {
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

// event listener to store input to local storage
saveBtn.on(`click`, function () {
    let text = $(this).siblings(`.description`).val();
    let time = $(this).parent().attr(`id`);
    localStorage.setItem(time, text);
});

// Retrieves data from local storage and displays
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));