function createComponents() {
	createAnchorButtons();
	createButtonButtons();
}

/**
 * @param {Object} btnIdArray <b>optional</b>
 */
function createAnchorButtons() {
	var elementArray = $('a.button');
	createButtons(elementArray);
}

function createButtonButtons() {
	var elementArray = $('button.button');
	createButtons(elementArray);
}

function createButtons(elementArray) {
	for(var i=0; i<elementArray.length; i++) {
		var jqEl = elementArray[i];
		createButton(jqEl);
	}
}

/**
 * @param {Object} element
 */
function createButton(element) {
	var currentContent = element.innerHTML;
	element.innerHTML = '';
	
	var btnLeft = $('<span class="btnLft"></span>');
	element.appendChild(btnLeft[0]);

	var btnFill = $('<span class="btnFll"></span>');
	btnFill[0].innerHTML = currentContent;
	element.appendChild(btnFill[0]);

	var btnRight = $('<span class="btnRgt"></span>');
	element.appendChild(btnRight[0]);
}

function _log(message) {
	console.log(message);
}
