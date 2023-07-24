const openMobile = document.getElementById('bars');
const closeMobile = document.getElementById('close');
const mobilemenu = document.getElementById('mobile_m');
const menuList = document.getElementsByClassName('navlist');
console.log(menuList);

function openMobileMenu() {
  mobilemenu.style.display = 'flex';
}

function closeMobilemenu() {
  mobilemenu.style.display = 'none';
}
for (let i = 0; i < menuList.length; i += 1) {
  menuList[i].addEventListener('click', closeMobilemenu);
}
openMobile.addEventListener('click', openMobileMenu);
closeMobile.addEventListener('click', closeMobilemenu);