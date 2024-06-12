function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allowedCharacters = '';
    if (includeLowercase) allowedCharacters += lowercase;
    if (includeUppercase) allowedCharacters += uppercase;
    if (includeNumbers) allowedCharacters += numbers;
    if (includeSymbols) allowedCharacters += symbols;

    if (allowedCharacters === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomIndex];
    }

    document.getElementById('password-result').innerText = password;
    document.getElementById('generated-password').value = password;
}

function saveNote() {
    const siteName = document.getElementById('site-name').value;
    const generatedPassword = document.getElementById('generated-password').value;

    if (siteName === '' || generatedPassword === '') {
        alert('Please fill in both fields.');
        return;
    }

    const notesList = document.getElementById('notes-list');
    const noteItem = document.createElement('li');

    const siteNameSpan = document.createElement('span');
    siteNameSpan.innerText = siteName;

    const passwordSpan = document.createElement('span');
    passwordSpan.innerText = generatedPassword;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => notesList.removeChild(noteItem);

    noteItem.appendChild(siteNameSpan);
    noteItem.appendChild(passwordSpan);
    noteItem.appendChild(deleteButton);
    notesList.appendChild(noteItem);

    document.getElementById('site-name').value = '';
    document.getElementById('generated-password').value = '';
}
