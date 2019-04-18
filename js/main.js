var playerArea = document.querySelector('#playerArea');
var playerBtn = document.querySelector('#playerBtn');
var comp1Area = document.querySelector('#comp1Area');
var comp1Btn = document.querySelector('#comp1Btn');
var comp2Area = document.querySelector('#comp2Area');
var comp2Btn = document.querySelector('#comp2Btn');
var comp3Area = document.querySelector('#comp3Area');
var comp3Btn = document.querySelector('#comp3Btn');
var startBtn = document.querySelector('#startBtn');
var infoDiv = document.querySelector('#info');
var texts = ['Juce je bio divan dan', 'Danas je divan dan', 'Sutra je divan dan'];
var rand;
var winner = 0;

startBtn.addEventListener('click', timer);

function timer() {
	var time = 3;
	startBtn.innerHTML = time;
	var loop = setInterval((e) => {
	  time--;
	  startBtn.innerHTML = time;
	  if (time === 0) {
	  	clearInterval(loop);
	  	startBtn.style.display = 'none';
	  	startTyping();
	  }
	}, 1000)
}
function startTyping() {
	rand = Math.floor(Math.random() * texts.length);
	var text = '<h3>'+texts[rand]+'</h3>';
	infoDiv.innerHTML = text;
	infoDiv.style.display = 'block';
	playerArea.focus();
	comp1StartTyping();
	comp2StartTyping();
	comp3StartTyping();
	playerStartTyping();
}
function playerStartTyping() {
	playerArea.addEventListener('keyup', (e) => {
		if (e.keyCode === 13) {
			var userText = playerArea.value.trim();
			if (userText == texts[rand]) {
				winner++;
				playerBtn.className = 'form-control btn btn-success';
				playerBtn.innerHTML = 'Position : '+winner;
			} else {
				playerBtn.className = 'form-control btn btn-danger';
				playerBtn.innerHTML = 'Wrong Typing...'
			}
		}
	})
}
function comp1StartTyping() {
	var text = texts[rand]
	var textArray = text.split('');
	var loop = setInterval(() => {
	  comp1Area.value += textArray.shift();
	  if (textArray == 0) {
	  	clearInterval(loop);
				winner++;
				comp1Btn.className = 'form-control btn btn-success';
				comp1Btn.innerHTML = 'Position : '+winner;
	  }
	}, 150)
}
function comp2StartTyping() {
	var text = texts[rand]
	var textArray = text.split('');
	var loop = setInterval(() => {
	  comp2Area.value += textArray.shift();
	  if (textArray == 0) {
	  	clearInterval(loop);
				winner++;
				comp2Btn.className = 'form-control btn btn-success';
				comp2Btn.innerHTML = 'Position : '+winner;
	  }
	}, 350)
}
function comp3StartTyping() {
	var text = texts[rand]
	var textArray = text.split('');
	var loop = setInterval(() => {
	  comp3Area.value += textArray.shift();
	  if (textArray == 0) {
	  	clearInterval(loop);
				winner++;
				comp3Btn.className = 'form-control btn btn-success';
				comp3Btn.innerHTML = 'Position : '+winner;
	  }
	}, 250)
}