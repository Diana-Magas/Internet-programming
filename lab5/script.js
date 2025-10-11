function tabSwitch(new_tab, new_content) {
  document.getElementById('content_1').style.display = 'none';
  document.getElementById('content_2').style.display = 'none';
  document.getElementById('content_3').style.display = 'none';
  document.getElementById(new_content).style.display = 'block';
  document.getElementById('tab_1').className = '';
  document.getElementById('tab_2').className = '';
  document.getElementById('tab_3').className = '';
  document.getElementById(new_tab).className = 'active';
}

document.getElementById('themeToggle').onclick = function () {
  document.body.classList.toggle('light');
};

const popup = document.getElementById('popup');
document.getElementById('showPopup').onclick = function () {
  popup.style.display = 'block';
};
document.getElementById('closePopup').onclick = function () {
  popup.style.display = 'none';
};
window.onclick = function (e) {
  if (e.target == popup) popup.style.display = 'none';
};

document.getElementById('burger').onclick = function () {
  document.getElementById('navLinks').classList.toggle('active');
};
