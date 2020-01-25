let toLastConfirm = () => {
  document.querySelector('.form__last-confirm').addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.checkout').style.display = 'none';
    document.querySelector('.confirmation').style.display = 'flex';
  })
}