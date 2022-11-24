/**
 * ------------- ПРИМЕР ------------------ *
 *               MOMENT
 * --------------------------------------- *
 */

var now = moment();
moment.lang('ru');
console.log(now.format('dddd, MMMM DD YYYY, h:mm:ss'));
// вторник, апреля 15 2022, 9:31:03

var now = moment().add('days', 9);
moment.lang('ru');
console.log(now.format('dddd, MMMM DD YYYY'));
//"Sunday, April 24 2022"