const screenshot_path = "./screenshot_size/";

var cardinals = [
{
  title: "Public Profile",
  summary: "stylized profile page for a speaker or public figure",
  screenshot: "./data/screenshot_size/dennet_300x190.png",
  url: "https://compassioncrumb.github.io/front-end-composition-1/",
  skills: ["scss", "html5"]
},
{
  title: "Modern Job Board",
  summary: "detailed layout for a modern job board",
  screenshot: screenshot_path + "job_board_300x190.png",
  url: "https://compassioncrumb.github.io/job-board-composition/",
  skills: ["scss", "html5", "flexbox"]
},
{
  title: "User Info Cards",
  summary: "card-based layout to display profile information",
  screenshot: screenshot_path + "user_info_300x190.png",
  url: "https://compassioncrumb.github.io/users-info-composition/",
  skills: ["scss", "html"]
},
{
  title: "Wikipedia Search",
  summary: "utilizes the wikipedia api to fetch search results and tastefully display them",
  screenshot: screenshot_path + "wikipedia_300x190.png",
  url: "https://compassioncrumb.github.io/wikipedia-search/",
  skills: ["ajax", "jquery", "javascript"]
},
{
  title: "Pomodoro Timer",
  summary: "stay focused, then take a break with this minimalist pomodoro timer",
  screenshot: screenshot_path + "il_doro_300x190.png",
  url: "https://compassioncrumb.github.io/il-doro/",
  skills: ["jquery", "javascript", "transitions"]
},
{
    title: "Simon Signifies",
    summary: "a simple, elegant simon says game",
    screenshot: screenshot_path + "simon_300x190.png",
    url: "https://compassioncrumb.github.io/simon-signifies/",
    skills: ["jquery", "javascript"]
  },
  {
    title: "Library Catalog",
    summary: "back-end and form based library catalog site, with content management functions",
    screenshot: screenshot_path + "library_300x190.png",
    url: "https://townlibrary.herokuapp.com/catalog/book/create",
    skills: ["node", "pug/jade", "express"]
  }
];

export default cardinals;
