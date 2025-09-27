function calculate() {
    const form = document.getElementById('testForm');
    let total = 0;
    let table = '<table><tr><th>Питання</th><th>Ваша відповідь</th><th>Бали</th></tr>';

    for (let i = 1; i <= 2; i++) {
        let radios = form['radio'+i];
        let score = 0;
        let answer = '';
        for (let r of radios) {
            if (r.checked) {
                score = parseFloat(r.value);
                answer = r.nextSibling.textContent || r.parentNode.textContent;
            }
        }
        total += score;
        table += `<tr><td>Питання ${i}</td><td>${answer}</td><td>${score}</td></tr>`;
    }

    for (let i = 1; i <= 2; i++) {
        let checks = form['check'+i];
        let selected = [];
        let correctCount = 0;
        let score = 0;
        for (let c of checks) {
            if (c.checked) {
                selected.push(c.nextSibling.textContent || c.parentNode.textContent);
                if (c.value === "1") correctCount++;
            }
        }
        if (selected.length === 2 && correctCount === 2) score = 2;
        else if (selected.length === 2 && correctCount === 1) score = 1;
        else score = 0;

        total += score;
        table += `<tr><td>Питання ${i+2}</td><td>${selected.join(", ")}</td><td>${score}</td></tr>`;
    }

    let sel1 = form['select1'];
    let sel1Value = sel1.options[sel1.selectedIndex].text;
    let sel1Score = parseFloat(sel1.value);
    total += sel1Score;
    table += `<tr><td>Питання 5</td><td>${sel1Value}</td><td>${sel1Score}</td></tr>`;


    let sel2 = form['select2'];
    let sel2Selected = Array.from(sel2.selectedOptions);
    let sel2Score = 0;
    if (sel2Selected.length === 2) {
        let correctCount = sel2Selected.filter(opt => opt.value === "1").length;
        if (correctCount === 2) sel2Score = 2;
        else if (correctCount === 1) sel2Score = 1;
    }
    total += sel2Score;
    table += `<tr><td>Питання 6</td><td>${sel2Selected.map(o => o.text).join(", ")}</td><td>${sel2Score}</td></tr>`;

    let txt = form['text1'].value.trim();
    let txtScore = (txt.toLowerCase() === 'harry potter') ? 1 : 0;
    total += txtScore;
    table += `<tr><td>Питання 7</td><td>${txt}</td><td>${txtScore}</td></tr>`;

    table += `<tr><th colspan="2">Загальний бал</th><th>${total}</th></tr></table>`;
    document.getElementById('results').innerHTML = table;
}
