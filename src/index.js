import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SolarHuman } from './solar-years.js';

let user;

function calculateAge() {
  let userAge = $("#user-age").val();
  user = new SolarHuman(userAge);
  user.name = $("#user-name").val();
}

function showAgeResult() {
  $("#age-result").removeClass("hidden");
  $("#earth-name").text(`${user.name}`);
  $("#earth-age").text(`${user.currentAge}`);
  $("#earth-days").text(`${user.solarAge.earthDays}`);
  $("#mars-age").text(`${user.solarAge.marsYear}`);
  $("#venus-age").text(`${user.solarAge.venusYear}`);
  $("#merc-age").text(`${user.solarAge.mercuryYear}`);
  $("#jup-age").text(`${user.solarAge.jupiterYear}`);
  $("#intro2").removeClass("hidden");
}

function showDelta() {
  alert();
}

$(".intro-no").on("click", function() {
  $("#intro").addClass("hidden");
  $("#opt-out").removeClass("hidden");
  $("#lifestyle").addClass("hidden");
});

$(".intro-yes").on("click", function() {
  $("#intro").addClass("hidden");
  $("#opt-out").addClass("hidden");
  $("#lifestyle").removeClass("hidden");
});

$("#retry").on("click", function() {
  location.reload(true);
});

$("#form-yes").on("click", function() {
  $("#lifestyle").addClass("hidden");
  calculateAge();
  showAgeResult();
});

$(".intro-yes2").on("click", function() {
  $("#intro2").addClass("hidden");
  $("#age-result").addClass("hidden");
  $("#expected").removeClass("hidden");
});

$("#intro-no2").on("click", function() {
  $("#opt-out2").removeClass("hidden");
  $("#intro2").addClass("hidden");  
  $("#age-result").addClass("hidden");
  showDelta();
});

$("#ready").on("click", function() {
  showDelta();
});

$("#bhodi").on("click", function() {
  $("#opt-out2").addClass("hidden");
  showDelta();
});