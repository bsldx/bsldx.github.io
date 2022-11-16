const background = [ "000000", "626262", "898989", "adadad",
                     "ffffff", "9f4e44", "cb7e75", "6d5412",
	                 "a1683c", "c9d487", "9ae29b", "5cab5e",
	                 "6abfc6", "887ecb", "50459b", "a057a3" ];
const text = [ "ffffff", "ffffff", "ffffff", "ffffff",
               "000000", "ffffff", "ffffff", "ffffff",
	           "ffffff", "000000", "000000", "ffffff",
	           "ffffff", "ffffff", "ffffff", "ffffff" ];

const index = Math.floor(Math.random() * 16);
const pElem = document.getElementById('ldx');
let hex = index.toString(16);
hex = hex.length == 1 ? "0" + hex : hex;
pElem.innerHTML = 'ldx #' + hex + '&nbsp;&nbsp;<br />stx #d020';
const hexColor = '#' + text[index];
document.body.style.background = '#' + background[index];
pElem.style.color = hexColor;
document.getElementById('small1').style.color = hexColor;
