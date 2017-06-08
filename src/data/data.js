import public_profile_img from "./screenshot_size/dennet_300x190.png"
import job_board_img from "./screenshot_size/job_board_300x190.png"
import user_info_img from "./screenshot_size/user_info_300x190.png"
import wikipedia_img from "./screenshot_size/wikipedia_300x190.png"
import il_doro_img from "./screenshot_size/il_doro_300x190.png"
import simon_img from "./screenshot_size/simon_300x190.png"
import library_img from "./screenshot_size/library_300x190.png"

const screenshot_path = "./screenshot_size/";

var cardinals = [
{
  title: "Public Profile",
  summary: "stylized profile page for a speaker or public figure",
  //screenshot: "./screenshot_size/dennet_300x190.png",
  screenshot: public_profile_img,
  url: "https://compassioncrumb.github.io/front-end-composition-1/",
  skills: ["scss", "html5"]
},
{
  title: "Modern Job Board",
  summary: "detailed layout for a modern job board",
  //screenshot: screenshot_path + "job_board_300x190.png",
  screenshot: job_board_img,
  url: "https://compassioncrumb.github.io/job-board-composition/",
  skills: ["scss", "html5", "flexbox"]
},
{
  title: "User Info Cards",
  summary: "card-based layout to display profile information",
  //screenshot: screenshot_path + "user_info_300x190.png",
  screenshot: user_info_img,
  url: "https://compassioncrumb.github.io/users-info-composition/",
  skills: ["scss", "html"]
},
{
  title: "Wikipedia Search",
  summary: "utilizes the wikipedia api to fetch search results and tastefully display them",
  //screenshot: screenshot_path + "wikipedia_300x190.png",
  screenshot: wikipedia_img,
  url: "https://compassioncrumb.github.io/wikipedia-search/",
  skills: ["ajax", "jquery", "javascript"]
},
{
  title: "Pomodoro Timer",
  summary: "stay focused, then take a break with this minimalist pomodoro timer",
  //screenshot: screenshot_path + "il_doro_300x190.png",
  screenshot: il_doro_img,
  url: "https://compassioncrumb.github.io/il-doro/",
  skills: ["jquery", "javascript", "transitions"]
},
{
    title: "Simon Signifies",
    summary: "a simple, elegant simon says game",
    //screenshot: screenshot_path + "simon_300x190.png",
    screenshot: simon_img,
    url: "https://compassioncrumb.github.io/simon-signifies/",
    skills: ["jquery", "javascript"]
  },
  {
    title: "Library Catalog",
    summary: "back-end and form based library catalog site, with content management functions",
    //screenshot: screenshot_path + "library_300x190.png",
    screenshot: library_img,
    url: "https://townlibrary.herokuapp.com/catalog/book/create",
    skills: ["node", "pug/jade", "express"]
  }
];

export default cardinals;
