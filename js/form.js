const formEl = document.querySelector('[name="review_form"]');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  console.log('User name', event.target.elements.user_name.value);
  console.log('User pass', event.target.elements.user_password.value);
});
