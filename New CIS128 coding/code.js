function get_money () {

let normal_pay_rate = document.getElementById("d2").valueAsNumber
let overtime_pay_rate = document.getElementById("d2").valueAsNumber
let hoursworked = document.getElementById("d3").valueAsNumber
let normal_hours = document.getElementById("d4").valueAsNumber

let money;
if (hoursworked<= normal_hours) {
money = hoursworked * normal_pay_rate
} else{
    money = normal_pay_rate*normal_hours+ (hoursworked)*overtime_pay_rate}
document.getElementById("result").innerHTML = money + "dollars" } 