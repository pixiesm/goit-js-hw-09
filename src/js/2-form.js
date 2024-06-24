let formData = {
    email: '',
    message: '',
};
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageTextarea = form.querySelector('textarea')

function saveToLS() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// function loadFromLS(key) { 
//     const json = localStorage.getItem(key);
//     try {
//         const data = JSON.parse(json);
//         return data;
//     } catch {
//         return json;
//     }
// }

form.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value;
    saveToLS();
})
 
// function validForm() {
//     if (messageTextarea.value === '' || emailInput.value === '') { return false }
// else { return true}
// }




window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message
}
})
 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (messageTextarea.value === '' || emailInput.value === '') { alert('Fill please all fields')  }
    // const formData = new FormData(form);
    // const email = formData.get('email');
    // const message = formData.get('message');
    // const data = { email, message };
    console.log(formData);
    formData = {email:'', message:''}
    form.reset();
    localStorage.removeItem('feedback-form-state');
   
});

