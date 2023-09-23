// Get the registrations anchor tag

const dropIconEl=document.querySelector('#drop-icon');

// Get the lgin button 
const loginbuttonEl=document.querySelector("#login-button");

// registration options School and Government 
const registrationOptionsEl=document.querySelector('.options');

// Login options School and Government 
const loginOptionsEl=document.querySelector(".login-options");

// Login Process-School and Government 
loginbuttonEl.addEventListener("click",()=>{
    if(loginOptionsEl.classList.contains('show-options')){
        loginOptionsEl.classList.remove("show-options");
    }else{
        loginOptionsEl.classList.add("show-options");
    }
})

// Registration Process - School and Government 
dropIconEl.addEventListener("click",()=>{
    if(registrationOptionsEl.classList.contains('show-options')){
        registrationOptionsEl.classList.remove("show-options");
    }else{
        registrationOptionsEl.classList.add("show-options");
    }
  
})