/**
 * ==================================================== *
 *               ДОМАШНЕЕ ЗАДАНИЕ №3
 * ==================================================== *
 * 1. Изучите как работают и что делают методы hide и hover
 * 2. Допишите файл index.html и jQueryExamoles.js чтобы продемонстрировать их работу
 * 3. Используйте любые элементы html, селекторы тоже любые (тут представлены в основном рандомные их можно/нужно менять)
 * ==================================================== *
 */

/**
 * ------------- ПРИМЕР ------------------ *
 *               jQuery
 * --------------------------------------- *
 */
$ // стандартный объект jQuery

$(document).ready(function () { // получение глобального объекта document и выполнение функции при его загрузке
	console.log("ready!");
});

$("#myDivId"); // получение элемента по id (#)

$(".myDivClass"); // получение элемента по классу

var myValue = $("#myDivId").val(); // получение значения инпута

$("#myDivId").val("hello world"); // запись значение

$("p").click(function () { // установка обработчика на click
	console.log("You clicked a paragraph!");
});

$("p").on("click", function () { // та же логика обработчика
	console.log("click");
});

$("p.color").click(function () { // установка обработчика на click
	$(this).toggleClass('color')
	console.log("You paint a paragraph!");
});

$("#menu li").hover(function () {
	$(this).toggleClass("hover");
});

$("p.hide").click(function () {
	$("p.hide").hide();// спрятать элемент
})

$("div.hidden").click(function () {
	$("p.hide").show();// спрятать элемент
})
// Чтобы изменить класс у html элемента
// стандартный способ 
const someDiv = document.querySelector('.someClass')
someDiv?.classList.add('newClass')
// document.querySelector('.someClass').classList.add('newClass')

//jQuery
$('.someClass').addClass("newClass yourClass");