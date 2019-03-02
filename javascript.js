

	document.addEventListener('DOMContentLoaded', function(){
		
		GetClock();
		setInterval(GetClock, 1000);

	
	}, false );
	
	
	/* TIME */

	var tmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var tdate = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	function GetClock() {
		var d = new Date();
		var nmonth = d.getMonth();
		var nday = d.getDay();
		var ndate = d.getDate();
		var nyear = d.getYear();
		if(nyear<1000) nyear+=1900;
		var nhour = d.getHours();
		var nmin = d.getMinutes();
		if(nmin<=9) nmin = "0" + nmin
		nhour = ((nhour + 11) % 12 + 1);

		document.getElementById('clockbox').innerHTML = nhour + ":" + nmin ;
		document.getElementById('datebox').innerHTML = tdate[nday] + ", " + tmonth[nmonth] + " " + ndate;
	}
	
	
	
	/* QUICK SEARCH */

	var s3 = [
	
		['!a ', 'amazon'],
		['!r ', 'reddit'],
		['!w ', 'wikipedia'],
		['!yt ', 'youtube']

	]

	var s4 = [

		['!mathse', 'math stack exchange'],
		['!mo', 'math overflow'],
		['!nlab', 'nlab'],
		['!arx', 'arxiv']
		
	]	

	var s5 = [

		['!sklearn', 'scikit-learn'],
		['!so', 'stack overflow']
		
	]
	
	
	var google = 'http://www.google.com/search?q=';
	var duckduckgo = 'https://duckduckgo.com/?q=';
	var defaultSearch = duckduckgo;

	
	/* INPUT SEARCH */
	
	var input1 = document.getElementById('input1');
	var help = document.getElementById('help');
	
	input1.addEventListener('keypress', function(event){

	function clearInput(){
		input1.value = '';
		input1.focus();
		input1.blur();
		input1.focus();
		help.style.display = 'none';
		event.preventDefault();
	}


	if (event.keyCode == 13 || event.which == 13){
			var value = input1.value;
		
		
			if (value == ''){
				help.style.display = 'none';
				
				event.preventDefault();
				return false;
			}
			else {
			
				switch (value.substr(0,2)){
					case '-?':
						clearInput();
						help.style.display = 'block';

						return false;
						break;
				}

				
				for (i=0; i<s3.length; i++){
					switch (value.substr(0,3)){
						case s3[i][0]:
							window.open(s3[i][2] + escape(input1.value.slice(3)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s4.length; i++){
					switch (value.substr(0,4)){
						case s4[i][0]:
							window.open(s4[i][2] + escape(input1.value.slice(4)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s5.length; i++){
					switch (value.substr(0,5)){
						case s5[i][0]:
							window.open(s5[i][2] + escape(input1.value.slice(5)));
							clearInput();
							return false;
							break;
					}
				}
				
				window.open(defaultSearch + escape(input1.value));
				clearInput();
				return false;
			}
		}
	})

	
	
	/* HELP */
	
	displayHelp();

	function displayHelp(){
	
	
		var cmd = document.querySelectorAll('bang');
		var act = document.querySelectorAll('site');
		
		var allSites = s3.concat(s4, s5);
		allSites.sort();


		for (let i=0; i<allSites.length; i++){
			for (let j=0; j<allSites[i].length; j++){
				cmd[i].innerHTML = allSites[i][0]
			}
		}
		
		for (let i=0; i<allSites.length; i++){
			for (let j=0; j<allSites[i].length; j++){
				act[i].innerHTML = allSites[i][1]
			}
		}
	}
