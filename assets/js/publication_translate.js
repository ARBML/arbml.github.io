// The fetchLang function is fetching the the language from the lang.json file
// This file is just for the publication page

let fetchLang = async () => {
    let response = await fetch("assets/js/lang.json");
    let data = await response.json();
  
    let ar = document.querySelector("#ar");
    let en = document.querySelector("#en");
    // let ar_style = document.getElementById("ar_style");
  
    ar.addEventListener("click", () => {
      translate_btn.innerHTML = "Arabic";
  
      publications.innerHTML = data.ar.publications;
      publications_title.innerHTML = data.ar.publications_title;
      talks.innerHTML = data.ar.talks;
  
    //   ar_style.classList.add("ar-text");
    });
  
    en.addEventListener("click", () => {
      translate_btn.innerHTML = "English",
  
      publications.innerHTML = data.en.publications;
      publications_title.innerHTML= data.en.publications_title;
      talks.innerHTML = data.en.talks;
      
  
    //   ar_style.classList.remove("ar-text");
    });
  };
  
  fetchLang();
  