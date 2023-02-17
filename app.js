const sections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const videos = document.querySelectorAll('.video');
const scrollBoxes = document.querySelectorAll('.scroll')
const win = document.querySelectorAll('.main-window')

function PageTransitions(){
    for(let i =0;i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn'
        })
    }

    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            sectBtn.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active')
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');

            videos.forEach((vid)=>{
                vid.pause();
                vid.currentTime = 0;
            })
            scrollBoxes.forEach((box)=>{
                box.scrollTop = 0;
            })
            win.forEach((box)=>{
                box.scrollTop = 0;
            })
            
        }
    })

}

PageTransitions();