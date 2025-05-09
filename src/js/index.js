const domElements = {
    userEmail: document.querySelector('#email'),
    errorMessage: document.querySelector('.error-message'),
    submitBtn: document.querySelector('.submit-btn'),
}

function verifyEmail () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let email = domElements.userEmail.value

    if (!emailPattern.test(email)) {
        domElements.userEmail.style.border = '2px solid oklch(0.637 0.237 25.331)'
        domElements.errorMessage.style.display = 'block'
    }
    else {
        domElements.userEmail.style.border = 'none'
        domElements.errorMessage.style.display = 'none'
    }
}

domElements.submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    verifyEmail()
})