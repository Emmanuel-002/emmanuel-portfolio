var typed = new Typed('#element', {
    strings: [' <i>MangoDb</i>', ' <i>Epress JS</i>', '<i>React JS</i>', '<i>Node JS</i>', 'HTML 5', 'CSS 3', 'Material UI', 'Bootstrap', 'Github', 'Linux', 'Algortithms', 'Data Structures'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.querySelector('#year').innerText = new Date().getFullYear()
document.querySelector('#yearOfExperience').innerText = new Date().getFullYear()-2021