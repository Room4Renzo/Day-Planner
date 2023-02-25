const currentDay = $(`#currentDay`);
let today = moment().format(`dddd, MMMM Do`);
let todayIs = (`Today is: ` + today);
currentDay.text(todayIs);
let currentTime = moment().hour()
console.log('currentTime: ', currentTime);
const time = $(`.time-block`);
const description = $(`.description`);

// for loop compares id of all items of block class against current time
for (let i = 0; i < 9; i++) {
    if (currentTime === time.attr(`id`)) {
        description.attr(`class`, `present`)
    } else if (currentTime > time.attr(`id`)) {
        description = $(`class`, `past`)
    } else if (currentTime < time.attr(`id`)) {
        description = $(`class`, `future`)
    }
}