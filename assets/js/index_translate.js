// The fetchLang function is fetching the the language from the lang.json file
// This file is just for the index page

let fetchLang = async () => {
  let response = await fetch("assets/js/lang.json");
  let data = await response.json();

  let ar = document.querySelector("#ar");
  let en = document.querySelector("#en");
  let ar_style = document.querySelector("#ar_style");

  let paper = document.querySelectorAll('.paper');
  let code = document.querySelectorAll('.code');
  let web = document.querySelectorAll('.web');

  news_body_four_link.innerHTML = "post";

  ar.addEventListener("click", () => {
    // translate_btn.innerHTML = "Arabic";

    publications.innerHTML = data.ar.publications;
    talks.innerHTML = data.ar.talks;
    hero_text.innerHTML = data.ar.hero_text;
    mission_text.innerHTML = data.ar.mission_text;
    mission.innerHTML = data.ar.mission;
    highlighted_projects.innerHTML = data.ar.highlighted_projects;
    masader.innerHTML = data.ar.masader;
    masader_text.innerHTML = data.ar.masader_text;
    klaam.innerHTML = data.ar.klaam;
    klaam_text.innerHTML = data.ar.klaam_text;
    calliar.innerHTML = data.ar.calliar;
    calliar_text.innerHTML = data.ar.calliar_text;
    qawafi.innerHTML = data.ar.qawafi;
    qawafi_text.innerHTML = data.ar.qawafi_text;
    tkseem.innerHTML = data.ar.tkseem;
    tkseem_text.innerHTML = data.ar.tkseem_text;
    arbml_text.innerHTML = data.ar.arbml_text;
    news.innerHTML = data.ar.news;
    news_body_one.innerHTML = data.ar.news_body[0];
    news_body_two.innerHTML = data.ar.news_body[1];
    news_body_three.innerHTML = data.ar.news_body[2];
    news_body_four1.innerHTML = data.ar.news_body[3];
    news_body_one_link.innerHTML = data.ar.news_body_one_link;
    news_body_three_link.innerHTML = data.ar.news_body_three_link;
    news_body_four_link.innerHTML = data.ar.news_body_four_link;
    join_our_community.innerHTML = data.ar.join_our_community;
    collaborators.innerHTML = data.ar.collaborators;

    for (let i = 0; i < paper.length; i++) {
      paper[i].innerHTML = data.ar.paper
    }

    for (let i = 0; i < code.length; i++) {
      code[i].innerHTML = data.ar.code
    }

    for (let i = 0; i < web.length; i++) {
      web[i].innerHTML = data.ar.web
    }

    ar_style.classList.add("ar-text");
  });

  en.addEventListener("click", () => {
    // translate_btn.innerHTML = "English"

    publications.innerHTML = data.en.publications;
    talks.innerHTML = data.en.talks;
    hero_text.innerHTML = data.en.hero_text;
    mission_text.innerHTML = data.en.mission_text;
    mission.innerHTML = data.en.mission;
    highlighted_projects.innerHTML = data.en.highlighted_projects;
    masader.innerHTML = data.en.masader;
    masader_text.innerHTML = data.en.masader_text;
    klaam.innerHTML = data.en.klaam;
    klaam_text.innerHTML = data.en.klaam_text;
    calliar.innerHTML = data.en.calliar;
    calliar_text.innerHTML = data.en.calliar_text;
    qawafi.innerHTML = data.en.qawafi;
    qawafi_text.innerHTML = data.en.qawafi_text;
    tkseem.innerHTML = data.en.tkseem;
    tkseem_text.innerHTML = data.en.tkseem_text;
    arbml_text.innerHTML = data.en.arbml_text;
    paper.innerHTML = data.en.paper;
    code.innerHTML = data.en.code;
    web.innerHTML = data.en.web;
    news.innerHTML = data.en.news;
    news_body_one.innerHTML = data.en.news_body[0];
    news_body_two.innerHTML = data.en.news_body[1];
    news_body_three.innerHTML = data.en.news_body[2];
    news_body_four1.innerHTML = data.en.news_body[3];
    news_body_one_link.innerHTML = data.en.news_body_one_link;
    news_body_three_link.innerHTML = data.en.news_body_three_link;
    news_body_four_link.innerHTML = data.en.news_body_four_link;
    join_our_community.innerHTML = data.en.join_our_community;
    collaborators.innerHTML = data.en.collaborators;

    for (let i = 0; i < paper.length; i++) {
      paper[i].innerHTML = data.en.paper
    }

    for (let i = 0; i < code.length; i++) {
      code[i].innerHTML = data.en.code
    }

    for (let i = 0; i < web.length; i++) {
      web[i].innerHTML = data.en.web
    }



    ar_style.classList.remove("ar-text");
  });
};

fetchLang();
