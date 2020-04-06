let textarea =  document.createElement('textarea'),
    keyboard = document.createElement('div'),
    row = [],
    codes = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal","Backspace","Tab","KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash","Delete","CapsLock","KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter","ShiftLeft","KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"],
    keyboardRowRu1 = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61],
    keyboardRowRuHigher1 = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43],
    keyboardRowEn1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61],
    keyboardRowEnHigher1 = [192, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43],
    keyboardRowRu2 = [,1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92],
    keyboardRowRuHigher2 = [,1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47],
    keyboardRowEn2 = [,113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92],
    keyboardRowEnHigher2 = [,81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124],
    keyboardRowRu3 = [,1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101],
    keyboardRowRuHigher3 = [,1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069],
    keyboardRowEn3 = [,97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39],
    keyboardRowEnHigher3 = [,65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34],
    keyboardRowRu4 = [16,1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],
    keyboardRowRuHigher4 = [16,1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44],
    keyboardRowEn4 = [16,122, 120, 99, 118, 98, 110, 109, 44, 46, 47],
    keyboardRowEnHigher4 = [16,90, 88, 67, 86, 66, 78, 77, 60, 62, 63];


// textarea;
document.body.appendChild(textarea);
textarea.classList.add('textarea');
document.body.appendChild(keyboard);
keyboard.classList.add('keyboard');


for (let i = 0; i < 5; i++) {
    row[i] = document.createElement('div');
    keyboard.appendChild(row[i]);
    row[i].classList.add('row');
}

// First row 
for (let i = 0; i < keyboardRowRu1.length; i++) {
    row[0].innerHTML += '<div class="key"></div>';
    row[0].querySelectorAll('.key')[i].innerHTML = '<span class="rus hidden"></span>' + '<span class="eng "></span>';
    row[0].querySelectorAll('.rus')[i].innerHTML = '<span class="caseDown hidden">'+String.fromCharCode(keyboardRowRu1[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keyboardRowRuHigher1[i])+'</span>';
    row[0].querySelectorAll('.eng')[i].innerHTML = '<span class="caseDown show">'+String.fromCharCode(keyboardRowEn1[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keyboardRowEnHigher1[i])+'</span>';
}
row[0].innerHTML += '<div class="key">Backspace</div>';


// Second row
for (let i = 0; i < keyboardRowRu2.length; i++) {
    row[1].innerHTML += '<div class="key"></div>';
    row[1].querySelectorAll('.key')[i].innerHTML = '<span class="rus hidden"></span>' + '<span class="eng "></span>';
    row[1].querySelectorAll('.rus')[i].innerHTML = '<span class="caseDown hidden">'+String.fromCharCode(keyboardRowRu2[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keyboardRowRuHigher2[i])+'</span>';
    row[1].querySelectorAll('.eng')[i].innerHTML = '<span class="caseDown show">'+String.fromCharCode(keyboardRowEn2[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keyboardRowEnHigher2[i])+'</span>';
}

row[1].innerHTML += '<div class="key">Del</div>';
row[1].querySelector('.key').innerHTML = 'Tab';


// Third row

for (let i = 0; i < keyboardRowRu3.length; i++) {
    row[2].innerHTML += '<div class="key"></div>';
    row[2].querySelectorAll('.key')[i].innerHTML = '<span class="rus hidden"></span>' + '<span class="eng "></span>';
    row[2].querySelectorAll('.rus')[i].innerHTML = '<span class="caseDown hidden">'+String.fromCharCode(keyboardRowRu3[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keyboardRowRuHigher3[i])+'</span>';
    row[2].querySelectorAll('.eng')[i].innerHTML = '<span class="caseDown show">'+String.fromCharCode(keyboardRowEn3[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keyboardRowEnHigher3[i])+'</span>';
}

row[2].innerHTML += '<div class="key">Enter</div>';
row[2].querySelector('.key').innerHTML = 'CapsLock';

// Four Row 

for (let i = 0; i < keyboardRowRu4.length; i++) {
    row[3].innerHTML += '<div class="key"></div>';
    row[3].querySelectorAll('.key')[i].innerHTML = '<span class="rus hidden"></span>' + '<span class="eng "></span>';
    row[3].querySelectorAll('.rus')[i].innerHTML = '<span class="caseDown hidden">'+String.fromCharCode(keyboardRowRu4[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keyboardRowRuHigher4[i])+'</span>';
    row[3].querySelectorAll('.eng')[i].innerHTML = '<span class="caseDown show">'+String.fromCharCode(keyboardRowEn4[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keyboardRowEnHigher4[i])+'</span>';
}

row[3].innerHTML += '<div class="key">▲</div>';
row[3].innerHTML += '<div class="key">Shift</div>';
row[3].querySelector('.key').innerHTML = 'Shift';



// Fifth Row 

row[4].innerHTML += '<div class="key">Ctrl</div>' + '<div class="key">Win</div>' + '<div class="key">Alt</div>' + '<div class="key"></div>' + '<div class="key">Alt</div>' + '<div class="key">◄</div>' + '<div class="key">▼</div>' + '<div class="key">►</div>' + '<div class="key">Ctrl</div>';



// keyboard

let keys = document.querySelectorAll('.key'),
    rusBtns = document.querySelectorAll('.rus'),
    engBtns = document.querySelectorAll('.eng'),
    caseUPRus = document.querySelectorAll('span.rus > .caseUp'),
    caseDownRus = document.querySelectorAll('span.rus > .caseDown'),
    caseUPEng = document.querySelectorAll('span.eng > .caseUp'),
    caseDownEng = document.querySelectorAll('span.eng > .caseDown'),
    capsLock = document.getElementsByClassName('CapsLock'),
    backspace = document.getElementsByClassName('Backspace'),
    space = document.getElementsByClassName('Space'),
    tab = document.getElementsByClassName('Tab'),
    enter = document.getElementsByClassName('Enter'),
    shiftLeft = document.getElementsByClassName('ShiftLeft'),
    shiftRight = document.getElementsByClassName('ShiftRight'),
    deleteBtn = document.getElementsByClassName('Delete'),
    arrowLeft = document.getElementsByClassName('ArrowLeft'),
    arrowRight = document.getElementsByClassName('ArrowRight'),
    arrowUp = document.getElementsByClassName('ArrowUp'),
    isHighRegister = false,
    isRusLang = false,
    flag = true,
    checkCtrl = false;

keys.forEach((el,i) => {
    el.classList.add(codes[i]);
});
