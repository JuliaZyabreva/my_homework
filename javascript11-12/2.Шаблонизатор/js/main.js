$(function () {

  var html = $("#myPage").html();
  var userInfo = {
    name: "Зябрева Юлия Владимировна",
    userImageUrl: "img/img.jpg",
    frontendItem: "Хочу учить фронтенд потому что:",
    listArticles: [
      {list: "Мне интересна сфера IT-технологий"},
      {list: "Высокая востребованость на рынке труда."},
      {list: "Возможность самореализации."}
    ],
    contacts: [
      {
        contactType: "Мой контактный телефон",
        contactDetails: "+380507341207"
      },
      {
        contactType: "Мой профиль вконтакте",
        contactLinks: "https://vk.com/id233697601"
      }
    ],
    myQuote:"Любимая цитата:",
    quote:"Рыбаки знают, как грозно море, как страшны шторма. Но это не мешает им поднимать паруса.(Винсент Ван Гог)"
  };

  var content = tmpl(html, userInfo);


  $(".container").append(content);


});