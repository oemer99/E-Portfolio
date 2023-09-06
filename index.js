// template_sidzudj
// service_s3ybneo
// KQGaiYVNMWEQfRneV

function contact(event){
    event.preventDefault(); //damit die Seite nicht nach dem Email senden neu lädt
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible" // bei neu hinzugefügter klasse immer ein leerzeichen!!
    
    emailjs.sendForm(
            "service_s3ybneo",
            "template_sidzudj",
            event.target,
            "uRQXtfC0NSxeKgB0N"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on oemeray99@outlook.de"
            );
        })
}

let isModalOpen = false;
function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = !isModalOpen;

    document.body.classList += " modal__open";
}

let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle 
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

const scaleFactor = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x, y);

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`        
    }
}