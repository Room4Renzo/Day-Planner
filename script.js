const currentDay = $(`#currentDay`);
let today = moment().format(`dddd, MMMM Do`);
let todayIs = (`Today is: ` + today);
currentDay.text(todayIs);


