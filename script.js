const openMobile = document.getElementById('bars');
const closeMobile = document.getElementById('close');
const mobilemenu = document.getElementById('mobile_m')

function openMobileMenu() {
  mobilemenu.style.display = 'flex'
}
function closeMobile(){
openMobile.addEventListener('click', openMobileMenu());
}
