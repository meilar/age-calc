import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SolarYears from './solar-years.js';

$(document).ready(function() {
  let msg = testCode();
  console.log("This page is loading correctly " + msg);
});