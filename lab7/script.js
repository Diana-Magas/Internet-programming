function showLength() {
    let str = document.getElementById("input1").value;
    document.getElementById("result1").textContent = "Довжина рядка: " + str.length;
}

function showCase() {
    let str = document.getElementById("input2").value;
    document.getElementById("result2").textContent = 
        "Верхній регістр: " + str.toUpperCase() + " | Нижній регістр: " + str.toLowerCase();
}

function showIndex() {
    let str = document.getElementById("input3").value;
    let char = document.getElementById("char").value;
    let index = str.indexOf(char);
    document.getElementById("result3").textContent = "Індекс символу '" + char + "': " + index;
}

function countChar() {
    let str = document.getElementById("input4").value;
    let char = document.getElementById("char4").value;
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    document.getElementById("result4").textContent = "Кількість входжень '" + char + "': " + count;
}

function swapPairs() {
    let str = document.getElementById("input5").value;
    let result = "";
    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            result += str[i + 1] + str[i];
        } else {
            result += str[i];
        }
    }
    document.getElementById("result5").textContent = result;
}

function checkSpam() {
    let str = document.getElementById("input6").value.toLowerCase();
    let spamWords = ["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте"];
    let found = spamWords.some(word => str.includes(word.toLowerCase()));
    document.getElementById("result6").textContent = found ? "Спам виявлено!" : "Спаму немає";
}

function truncateString() {
    let str = document.getElementById("input7").value;
    let maxLength = Number(document.getElementById("maxLength").value);
    let result = str;
    if (str.length > maxLength) {
        result = str.slice(0, maxLength - 3) + "...";
    }
    document.getElementById("result7").textContent = result;
}

function removeVowels() {
    let str = document.getElementById("input8_3").value;
    let vowels = /[aeiouAEIOUаеиіоуюяєї]/g;
    let result = str.replace(vowels, '');
    document.getElementById("result8_3").textContent = result;
}

function replaceJS() {
    let str = document.getElementById("input9_3").value;
    let result = str.replace(/JavaScript/g, "JS");
    document.getElementById("result9_3").textContent = result;
}

function hasPalindromeSubstring() {
    let str = document.getElementById("input10_3").value;
    let found = false;

    for (let len = 3; len <= str.length; len++) {
        for (let i = 0; i <= str.length - len; i++) {
            let substr = str.slice(i, i + len);
            let reversed = substr.split('').reverse().join('');
            if (substr === reversed) {
                found = true;
                break;
            }
        }
        if (found) break;
    }

    document.getElementById("result10_3").textContent = found ? "true" : "false";
}


