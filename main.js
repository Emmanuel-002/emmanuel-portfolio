var typed = new Typed('#element', {
    strings: ['<i>Fullstack Developer</i>', ' <i>MangoDb</i>', ' <i>Epress JS</i>', '<i>React JS</i>', '<i>Node JS</i>'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.querySelector('#year').innerText = new Date().getFullYear()
document.querySelector('#yearOfExperience').innerText = new Date().getFullYear()-2021