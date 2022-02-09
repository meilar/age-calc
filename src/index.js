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

function calculateDelta() {
  let userLifespan = $("#user-lifespan").val();
  user.updateExpectedLifespan(userLifespan);
}

function showDelta() {
  $("#delta-result").removeClass("hidden");
  let deltaText;
  if (user.reachedLifespan === true) {
    deltaText = ", you have exceeded your lifespan by ";
  } else {
    deltaText = ", you will reach your expected lifespan in ";
  }
  $("#dlist-earth").text(`On Earth${deltaText}${user.lifespanDelta.earthYear} years.`);
  $("#dlist-mars").text(`On Mars${deltaText}${user.lifespanDelta.marsYear} years.`);
  $("#dlist-venus").text(`On Venus${deltaText}${user.lifespanDelta.venusYear} years.`);
  $("#dlist-merc").text(`On Mercury${deltaText}${user.lifespanDelta.mercuryYear} years.`);
  $("#dlist-jup").text(`On Jupiter${deltaText}${user.lifespanDelta.jupiterYear} years.`);
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

$(".retry").on("click", function() {
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
});

$("#ready").on("click", function() {
  $("#expected").addClass("hidden");
  calculateDelta();
  showDelta();
});

$("#bhodi").on("click", function() {
  $("#opt-out2").addClass("hidden");
  calculateDelta();
  showDelta();
});