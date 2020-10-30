var text9 = $("#9hr");
var text10 = $("#10hr");
var text11 = $("#11hr");
var text12 = $("#12hr");
var text1 = $("#1hr");
var text2 = $("#2hr");
var text3 = $("#3hr");
var text4 = $("#4hr");
var text5 = $("#5hr");

var textHr9 = localStorage.getItem("9hr");
var textHr10 = localStorage.getItem("10hr");
var textHr11 = localStorage.getItem("11hr");
var textaHr12 = localStorage.getItem("12hr");
var textHr1 = localStorage.getItem("1hr");
var textHr2 = localStorage.getItem("2hr");
var textHr3 = localStorage.getItem("3hr");
var textHllr4 = localStorage.getItem("4hr");
var textHr5 = localStorage.getItem("5hr");



$("#currentDay").text(moment().format('dddd') + ", " + moment().format('LL'));

