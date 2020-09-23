/* alert('Toto pochází z externího souboru'); */
// var nadpis - starší deklarace proměnné v JS
// proměnná v nových verzích JS
let nadpis = document.getElementById('nadpis');
let footer = document.querySelector('footer');
let img = document.querySelector('img');

img.addEventListener('mouseover', function() {
    img.src = 'manka.jpg';
});

img.addEventListener('mouseleave', function() {
    img.src = 'rumcajs.jpg';
});

nadpis.addEventListener('click', function(){
    nadpis.innerHTML = 'Ahoj <i>Karle</i>!';
    nadpis.style.color = 'blue';
    nadpis.style.fontFamily = 'serif';
    nadpis.classList.add('text-right');
    nadpis.classList.add('text-info');
    nadpis.classList.remove('text-uppercase');
});

footer.addEventListener('mouseover', function(){
    console.log('Footer reaguje - myš je uvnitř');
    this.classList.add('jumbotron');
    this.classList.add('bg-primary');
    nadpis.innerHTML = 'Myš je v zápatí';
});

footer.addEventListener('mouseout', function(){
    console.log('Footer reaguje - myš je fuč');
    this.classList.remove('jumbotron');
    this.classList.remove('bg-primary');
    nadpis.innerHTML = 'Myš je mimo zápatí';
});
