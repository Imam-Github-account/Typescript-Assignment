let personName :string = '';

personName = prompt('what is your name?') || '';

if(personName !== null && personName !== ''){
    alert(`hellow ${personName}, would you like to learn some python today?`)
}
else {
    alert('You have to fill your name !')
}