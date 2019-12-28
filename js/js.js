function role(d) {
  nav = document.getElementById("nav_main");
  burg = document.getElementById("burger");
  if (nav.className == "navigation_off") {
    nav.className = "navigation_on";
    burg.className = "fas fa-angle-down";
  }
  else {
    nav.className = "navigation_off";
    burg.className = "fa fa-bars";
  }
}
var links = new Array(
  "img/about_1.png",
  "img/about_2.png",
  "img/about_3.png",
  "img/about_4.png"
);
function nav(it) {
  li0 = document.getElementById("li0");
  li1 = document.getElementById("li1");
  li2 = document.getElementById("li2");
  li3 = document.getElementById("li3");
  element = document.getElementById("img_about");
  element.src = links[it];

  if ("li"+[it]=="li0") {
    li0.className = "li_on";
    li1.className = "about_li";
    li2.className = "about_li";
    li3.className = "about_li";
  }
  if ("li"+[it]=="li1") {
    li1.className = "li_on";
    li0.className = "about_li";
    li2.className = "about_li";
    li3.className = "about_li";
  }
  if ("li"+[it]=="li2") {
    li2.className = "li_on";
    li1.className = "about_li";
    li0.className = "about_li";
    li3.className = "about_li";
  }
  if ("li"+[it]=="li3") {
    li3.className = "li_on";
    li1.className = "about_li";
    li2.className = "about_li";
    li0.className = "about_li";
  }
}
function worka(j){
  elementsecond = document.getElementById("second"+[j]);
  elementthird = document.getElementById("third"+[j]);
  elementaopen = document.getElementById("aopen"+[j]);
  elementclose = document.getElementById("aclose"+[j]);

  if (elementsecond.className == "second") {
    elementsecond.className = "second2";
    elementthird.className = "third2";
    elementaopen.className = "workclose";
    elementclose.className = "worka";
  }
  else {
    elementsecond.className = "second";
    elementthird.className = "third";
    elementaopen.className = "worka";
    elementclose.className = "workclose";
  }
}
var name_re = new Array(
  "AL RAYHAN <i>/ UI/UX DESIGNER</i>",
  "JON TRAVOLTA <i>/ UI/UX DESIGNER</i>",
  "NINA IV <i>/ Recrutier </i>",
  "Holy Michaels <i>/ SECRETARy"
);
var img_re = new Array(
  "img/team_2.png",
  "img/team_3.png",
  "img/team_4.png",
  "img/team_0.png"
);
var lor_re = new Array(
  "Lorem Ipsum is simply dummy text of the printing and you standard dummy know that text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis hic, similique asperiores explicabo, itaque sequi excepturi possimus aliquam cum delectus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, pariatur.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, autem illum eaque! Illo fugit quas fuga non, voluptas architecto, deserunt.ossimus aliquam cum delectus.Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda veritatis ad accusamus magni iusto. Molestiae facilis possimus ullam nam nihil deserunt ipsam, nostrum, dignissimos quibusdam, praesentium ad aperiam nobis atque."
);

function review(k){
  name_rew = document.getElementById('name_rew');
  img_rew = document.getElementById('img_review');
  descr_text = document.getElementById('description_text');
  sta_text = document.getElementById('star_text');
  nav_li0 = document.getElementById("media_nav_li0");
  nav_li1 = document.getElementById("media_nav_li1");
  nav_li2 = document.getElementById("media_nav_li2");
  nav_li3 = document.getElementById("media_nav_li3");
  name_rew.innerHTML = name_re[k];
  img_rew.src = img_re[k];
  descr_text.innerHTML = lor_re[k];

  if ("li"+[k]=="li0") {
    nav_li0.className = "li_on";
    nav_li1.className = "about_li";
    nav_li2.className = "about_li";
    nav_li3.className = "about_li";
  }
  if ("li"+[k]=="li1") {
    nav_li1.className = "li_on";
    nav_li0.className = "about_li";
    nav_li2.className = "about_li";
    nav_li3.className = "about_li";
  }
  if ("li"+[k]=="li2") {
    nav_li2.className = "li_on";
    nav_li1.className = "about_li";
    nav_li0.className = "about_li";
    nav_li3.className = "about_li";
  }
  if ("li"+[k]=="li3") {
    nav_li3.className = "li_on";
    nav_li1.className = "about_li";
    nav_li2.className = "about_li";
    nav_li0.className = "about_li";
  }
  m = k;
}

function revi(revie){
  descr_text = document.getElementById('description_text');
  
}