const btn = document.getElementById('btn')
const text = document.getElementById('text')
let user = "Bassant";
btn.addEventListener('click' , function() {
    text.innerHTML = `Hello, ${user}`
})