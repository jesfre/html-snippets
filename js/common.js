function printDocInfo() {
	var _newSpan = document.createElement('SPAN');
	var _userAgent = "User-agent: " + navigator.userAgent;
	var _infoEl = document.getElementById('info');
	_newSpan.innerHTML = _userAgent;
	_infoEl.appendChild(_newSpan);
}
