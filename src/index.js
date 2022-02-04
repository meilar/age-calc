import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SolarAge from './solar-age.js';

$(document).ready(function() {
  let msg = testCode();
  console.log("This page is loading correctly " + msg);
});