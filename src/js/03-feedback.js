import throttle from 'lodash.throttle'

const formEl = document.querySelector('.feedback-form')
const LOCALSTORAGE_KEY = 'feedback-form-state'
initForm()

formEl.addEventListener('input', throttle(onInput, 500))
formEl.addEventListener('submit', onSubmit)

function onInput() {
  const formData = { email: formEl.email.value, message: formEl.message.value }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}


function onSubmit(e) {
  e.preventDefault()
  const emailEl = formEl.email.value;
  const messageEl = formEl.message.value;
  if(emailEl === '' || messageEl === '') {
    return alert('Заполни все поля!')
  }

  console.log(`email: ${emailEl}, message: ${messageEl}`);
  e.currentTarget.reset()
  localStorage.removeItem(LOCALSTORAGE_KEY)
}

function initForm() {
  const persisterdForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))

  if (persisterdForm) {
    formEl.email.value = persisterdForm.email
    formEl.message.value = persisterdForm.message
  }
}