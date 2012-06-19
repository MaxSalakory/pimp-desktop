// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
	/*-------- Menu Buttons--------*/
	$("#overzichtMenuButton").click(function(){
		$("#rooster,#takenTotaal,#bestanden, #profiel").removeClass("active");
		$("#overzicht").addClass("active")
	});
	$("#roosterMenuButton").click(function(){
		$("#overzicht,#takenTotaal,#bestanden, #profiel").removeClass("active");
		$("#rooster").addClass("active")
	});
	$("#takenMenuButton").click(function(){
		$("#overzicht,#rooster,#bestanden, #profiel").removeClass("active");
		$("#takenTotaal").addClass("active")
	});
	$("#bestandenMenuButton").click(function(){
		$("#overzicht,#rooster,#takenTotaal, #profiel").removeClass("active");		
		$("#bestanden").addClass("active")
	});
	$("#profielNaam").click(function(){
		$("#overzicht,#rooster,#takenTotaal, #bestanden").removeClass("active");		
		$("#profiel").addClass("active")
	});
	
	/*-------- Rooster Vrij Buttons--------*/
	
	$("#maandagVrijButton").click(function(){
		$("#roosterDinsdagVrij, #roosterWoensdagVrij, #roosterDonderdagVrij, #roosterVrijdagVrij").removeClass("active");
		$("#roosterMaandagVrij").addClass("active")
	});
	$("#dinsdagVrijButton").click(function(){
		$("#roosterMaandagVrij, #roosterWoensdagVrij, #roosterDonderdagVrij, #roosterVrijdagVrij").removeClass("active");
		$("#roosterDinsdagVrij").addClass("active")
	});
	$("#woensdagVrijButton").click(function(){
		$("#roosterDinsdagVrij, #roosterMaandagVrij, #roosterDonderdagVrij, #roosterVrijdagVrij").removeClass("active");
		$("#roosterWoensdagVrij").addClass("active")
	});
	$("#donderdagVrijButton").click(function(){
		$("#roosterDinsdagVrij, #roosterWoensdagVrij, #roosterMaandagVrij, #roosterVrijdagVrij").removeClass("active");
		$("#roosterDonderdagVrij").addClass("active")
	});
	$("#vrijdagVrijButton").click(function(){
		$("#roosterDinsdagVrij, #roosterWoensdagVrij, #roosterDonderdagVrij, #roosterMaandagVrij").removeClass("active");
		$("#roosterVrijdagVrij").addClass("active")
	});
	
	/*-------- Rooster Bezet Buttons--------*/
	
	$("#maandagBezetButton").click(function(){
		$("#roosterDinsdagBezet, #roosterWoensdagBezet, #roosterDonderdagBezet, #roosterVrijdagBezet").removeClass("active");
		$("#roosterMaandagBezet").addClass("active")
	});
	$("#dinsdagBezetButton").click(function(){
		$("#roosterMaandagBezet, #roosterWoensdagBezet, #roosterDonderdagBezet, #roosterVrijdagBezet").removeClass("active");
		$("#roosterDinsdagBezet").addClass("active")
	});
	$("#woensdagBezetButton").click(function(){
		$("#roosterDinsdagBezet, #roosterMaandagBezet, #roosterDonderdagBezet, #roosterVrijdagBezet").removeClass("active");
		$("#roosterWoensdagBezet").addClass("active")
	});
	$("#donderdagBezetButton").click(function(){
		$("#roosterDinsdagBezet, #roosterWoensdagBezet, #roosterMaandagBezet, #roosterVrijdagBezet").removeClass("active");
		$("#roosterDonderdagBezet").addClass("active")
	});
	$("#vrijdagBezetButton").click(function(){
		$("#roosterDinsdagBezet, #roosterWoensdagBezet, #roosterDonderdagBezet, #roosterMaandagBezet").removeClass("active");
		$("#roosterVrijdagBezet").addClass("active")
	});
	
	/*-------- Wat doe je --------*/
	$('#textWatDoeJe')
		.focusin(function() {
			if ( this.value == 'Wat doe je?' ) {
				this.value = '';    
			}
		})
		.focusout(function() {
			if ( this.value == '' ) {
				this.value = 'Wat doe je?';    
			}
	});
	
	/*--------------- De Klok ---------------*/
	
	$(document).ready(function() {
	
	var maandNamen = [ "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december" ]; 
	var dagNamen= ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]

	var newDate = new Date();
	newDate.setDate(newDate.getDate());
	$('#Date').html(dagNamen[newDate.getDay()] + " " + newDate.getDate() + ' ' + maandNamen[newDate.getMonth()] + ' ' + newDate.getFullYear());

	setInterval( function() {
		var seconds = new Date().getSeconds();
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
		},1000);
		
	setInterval( function() {
		var minutes = new Date().getMinutes();
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
		},1000);
		
	setInterval( function() {
		var hours = new Date().getHours();
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
		}, 1000);	
	});
	
	$(document).ready(function(){
		document.getElementById("range").innerHTML(newValue)
	});
	
	/*--------------- Taak toevoegen ---------------*/
	
	$('#addTaak .modal').click(function (e) {
		$('#addTaakModal').modal();
			return false;
	});
	
	/*--------------- Startpagina instellen ---------------*/
	$("#overzicht").addClass("active")
});