let showPackages = () => {
  document.querySelector('.navigation__packages').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('history').style.display = 'none';
    document.getElementById('overview-rooms').style.display = 'none';
    document.getElementById('packages').style.display = 'flex';
  });
};