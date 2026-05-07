const auswahlliste = document.querySelector('#theme-select');
const stylesheetDatei = document.querySelector('#theme-link');

function wechsleDesign() {
	const neueDatei = auswahlliste.value;
	if (stylesheetDatei){
		stylesheetDatei.href= neueDatei;
	}
}

auswahlliste.addEventListener('change', wechsleDesign);