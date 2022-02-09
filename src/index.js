import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SolarCitizen, SolarYears } from './solar-years.js';

$(document).ready(function() {
  let x = new SolarCitizen(10);
  let y = new SolarYears(100);
  console.log(x);
  console.log(y);
})

$("#intro-no").on("click", function() {
  $("#intro").addClass("hidden");
  $("#opt-out").removeClass("hidden");
})

$(".intro-yes").on("click", function() {
  $("#intro").addClass("hidden");
  $("#opt-out").addClass("hidden");
  $("#lifestyle").removeClass("hidden");
})

$("#form-yes").on("click", function() {
  $("#lifestyle").addClass("hidden");
  $("#age-result").removeClass("hidden");
})