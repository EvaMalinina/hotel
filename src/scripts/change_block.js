// hide main sections
let showOverview = () => {
  document.getElementById('history').style.display = "none";
  document.getElementById('overview-rooms').style.display = "flex";
  document.getElementById('packages').style.display = 'none';
  document.getElementById('info').style.display = 'none';
};

let showPackages = () => {
  document.getElementById('history').style.display = 'none';
  document.getElementById('overview-rooms').style.display = 'none';
  document.getElementById('packages').style.display = 'flex';
  document.getElementById('info').style.display = 'none';
};

let showInfo = () => {
  document.querySelector('.navigation__info').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('history').style.display = 'none';
    document.getElementById('overview-rooms').style.display = 'none';
    document.getElementById('packages').style.display = 'none';
    document.getElementById('info').style.display = 'flex';
  });
};