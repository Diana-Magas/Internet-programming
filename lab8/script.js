document.getElementById('t1-show').onclick = function() {
  let h = parseInt(document.getElementById('t1-hours').value) || new Date().getHours();
  let m = parseInt(document.getElementById('t1-minutes').value) || new Date().getMinutes();
  let s = parseInt(document.getElementById('t1-seconds').value) || new Date().getSeconds();
  document.getElementById('t1-output').textContent = `Поточний час: ${h}:${m}:${s}`;
};

document.getElementById('t1-add').onclick = function() {
  let h = parseInt(document.getElementById('t1-hours').value) || 0;
  let m = parseInt(document.getElementById('t1-minutes').value) || 0;
  let s = parseInt(document.getElementById('t1-seconds').value) || 0;
  let add = parseInt(prompt("На скільки секунд змінити час?")) || 0;

  s += add;
  if (s >= 60) { m += Math.floor(s / 60); s = s % 60; }
  if (m >= 60) { h += Math.floor(m / 60); m = m % 60; }
  if (h >= 24) { h = h % 24; }

  document.getElementById('t1-output').textContent = `Новий час: ${h}:${m}:${s}`;
};

document.getElementById('t1-clear').onclick = function() {
  document.getElementById('t1-hours').value = '';
  document.getElementById('t1-minutes').value = '';
  document.getElementById('t1-seconds').value = '';
  document.getElementById('t1-output').textContent = "Результат з'явиться тут.";
};


document.getElementById('t2-1-run').onclick = function() {
  let now = new Date();
  let days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"];
  let months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
  let text = `Дата: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} року
День тижня: ${days[now.getDay()]}
Час: ${now.getHours()}:${now.getMinutes()}`;
  document.getElementById('t2-1-output').textContent = text;
};

document.getElementById('t2-1-clear').onclick = function() {
  document.getElementById('t2-1-output').textContent = "Результат 2.1";
};


document.getElementById('t2-2-run').onclick = function() {
  let y = parseInt(document.getElementById('t2-2-year').value);
  let m = parseInt(document.getElementById('t2-2-month').value);
  let lastDay = new Date(y, m, 0).getDate();
  document.getElementById('t2-2-output').textContent = `Останній день місяця: ${lastDay}`;
};

document.getElementById('t2-2-clear').onclick = function() {
  document.getElementById('t2-2-year').value = '';
  document.getElementById('t2-2-month').value = '';
  document.getElementById('t2-2-output').textContent = "Результат 2.2";
};


document.getElementById('t2-3-run').onclick = function() {
  let now = new Date();
  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let next = new Date(start.getTime() + 24*60*60*1000);
  let secFrom = Math.floor((now - start) / 1000);
  let secTo = Math.floor((next - now) / 1000);
  document.getElementById('t2-3-output').textContent = `Від початку дня: ${secFrom} сек\nДо наступного дня: ${secTo} сек`;
};

document.getElementById('t2-3-clear').onclick = function() {
  document.getElementById('t2-3-output').textContent = "Результат 2.3";
};


class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  info() {
    return `Авто: ${this.brand} ${this.model}, ${this.year} року.`;
  }
}

document.getElementById('car-show').onclick = function() {
  let car = new Car(
    document.getElementById('car-brand').value,
    document.getElementById('car-model').value,
    document.getElementById('car-year').value
  );
  document.getElementById('car-output').textContent = car.info();
};

document.getElementById('car-clear').onclick = function() {
  document.getElementById('car-brand').value = '';
  document.getElementById('car-model').value = '';
  document.getElementById('car-year').value = '';
  document.getElementById('car-output').textContent = "Результат завдання 3";
};


class ElectricCar extends Car {
  constructor(brand, model, year, battery) {
    super(brand, model, year);
    this.battery = battery;
  }
  charge() {
    return `${this.brand} ${this.model} заряджається... Батарея: ${this.battery} kWh.`;
  }
}

document.getElementById('ecar-show').onclick = function() {
  let ecar = new ElectricCar(
    document.getElementById('ecar-brand').value,
    document.getElementById('ecar-model').value,
    document.getElementById('ecar-year').value,
    document.getElementById('ecar-battery').value
  );
  document.getElementById('ecar-output').textContent = ecar.info() + "\n" + ecar.charge();
};

document.getElementById('ecar-clear').onclick = function() {
  document.getElementById('ecar-brand').value = '';
  document.getElementById('ecar-model').value = '';
  document.getElementById('ecar-year').value = '';
  document.getElementById('ecar-battery').value = '';
  document.getElementById('ecar-output').textContent = "Результат завдання 4";
};


class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

document.getElementById('m-run').onclick = function() {
  let a = Number(document.getElementById('m-a').value);
  let b = Number(document.getElementById('m-b').value);
  document.getElementById('m-output').textContent = `Результат: ${MathHelper.add(a, b)}`;
};

document.getElementById('m-clear').onclick = function() {
  document.getElementById('m-a').value = '';
  document.getElementById('m-b').value = '';
  document.getElementById('m-output').textContent = "Результат завдання 5";
};


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

document.getElementById('rect-show').onclick = function() {
  let r = new Rectangle(
    Number(document.getElementById('rect-width').value),
    Number(document.getElementById('rect-height').value)
  );
  document.getElementById('task6-output').textContent =
    `Rectangle: площа = ${r.getArea()}, периметр = ${r.getPerimeter()}`;
};

document.getElementById('square-show').onclick = function() {
  let s = new Square(Number(document.getElementById('square-side').value));
  document.getElementById('task6-output').textContent =
    `Square: площа = ${s.getArea()}, периметр = ${s.getPerimeter()}`;
};

document.getElementById('rect-clear').onclick = function() {
  document.getElementById('rect-width').value = '';
  document.getElementById('rect-height').value = '';
  document.getElementById('task6-output').textContent = "Результат завдання 6";
};

document.getElementById('square-clear').onclick = function() {
  document.getElementById('square-side').value = '';
  document.getElementById('task6-output').textContent = "Результат завдання 6";
};
