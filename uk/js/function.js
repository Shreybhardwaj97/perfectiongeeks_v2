$(document).ready(function(){$(".menu-icon").click(function(){$(".nav-section").slideDown("slow")}),$(".nav-section-close").click(function(){$(".nav-section").hide()})});const items=document.querySelectorAll(".accordion button");function toggleAccordion(){const e=this.getAttribute("aria-expanded");for(i=0;i<items.length;i++)items[i].setAttribute("aria-expanded","false");"false"==e&&this.setAttribute("aria-expanded","true")}function validateform(e){const t={name:e.name.value,email:e.email.value,phone:e.phone.value,message:e.message.value};fetch("https://api.perfectiongeeks.com/api/user/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{console.log("********************************Success:",e)}).catch(e=>{console.error("*******************************Error:",e)}),alert("Form is Submitted"),location.href="https://www.perfectiongeeks.com/en-us/thank-you"}items.forEach(e=>e.addEventListener("click",toggleAccordion));