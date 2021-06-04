//      menu show y hidden
const navMenu = document.getElementById('nav-menu');
const navToggle= document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');



//      menu show        
//      valide if constant exists
if(navToggle){
    console.log("INSIDE IF");
    navToggle.addEventListener('click',()=>{
        console.log("INSIDE FUNTION");
        navMenu.classList.add('show-menu')
    })
}
//      menu hidden
//      validdata if constant exists
if(navClose){
    navClose.addEventListener('click',()=>{
    
            navMenu.classList.remove('show-menu')
    })
}
//      remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*      accordion skills        */
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')
    function toggleskills(){
        let itemclass= this.parentNode.className
        for(i =0;i<skillsContent.length;i++){
            skillsContent[i].className='skills__content skills__close'
        }
        if(itemclass==='skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
        }
    }
    skillsHeader.forEach((el) =>{
        el.addEventListener('click',toggleskills)
    })
   
