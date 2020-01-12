

function newId() {return parseInt(Math.round(Math.random() * 100000000) + "" + Math.round(Math.random() * 100000000));}

function setTextToElement(element, text) {
  element.innerHTML = "";
  let a = document.createElement('a');
  a.text = text;
  element.append(a);
}


function mapValue(_value, _inMin, _inMax, _outMin, _outMax) {
	let inRange = _inMax - _inMin;
	let ouRange = _outMax - _outMin;

	return (_value - _inMin) / inRange * ouRange + _outMin;
}