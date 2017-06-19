(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

["xray", "ultrasound", "ct", "mri", "pet", "tricorder", "starfleet"].forEach(function (section) {
  // set up clicking to update map interactive on mobile
  console.log(section);
  document.getElementById("button" + section).addEventListener("click", function () {

    var sectionElements = document.getElementsByClassName("section-emma");
    var buttonElements = document.getElementsByClassName("button");
    for (var i = 0; i < sectionElements.length; i++) {
      sectionElements[i].className = "section-emma";
      buttonElements[i].className = "button";
    };
    document.getElementById("section" + section).className += " selected";
    document.getElementById("button" + section).className += " selected";
    pymChild.sendHeight();
  });
});

},{}]},{},[1])
//# sourceMappingURL=interactive_app.js.map
