
["xray","ultrasound","ct","mri","pet","tricorder","starfleet"].forEach(function(section){
  // set up clicking to update map interactive on mobile
console.log(section);
  document.getElementById("button"+section).addEventListener("click", function() {
  	
    var sectionElements = document.getElementsByClassName("section-emma");
    var buttonElements = document.getElementsByClassName("button");
    for(var i = 0; i < sectionElements.length; i++){
      sectionElements[i].className = "section-emma";
      buttonElements[i].className = "button";
    };
    document.getElementById("section"+section).className += " selected";
    document.getElementById("button"+section).className += " selected";
    pymChild.sendHeight();
  });

});