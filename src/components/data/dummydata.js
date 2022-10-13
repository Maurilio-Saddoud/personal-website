import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube, VideogameAssetOff, VolunteerActivism, IntegrationInstructions, RocketLaunch, Javascript, Insights, Storage, DataObject } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Skills",
  },
  {
    url: "/blog",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "Maurilio",
    design: "A WEB DESIGNER",
    role: "A SOFTWARE ENGINEER",
    desc: "I am an incoming Associate Software Engineer at Lowe's who is passionate about accessability and inclusion in technology for all.",
  },
]
export const about = [
  {
    desc: "I was born in Amsterdam, took a boat to America when I was six, and washed up at Davidson College.",
    desc1: "I love to build things--whether its with wood or with a keyboard, I love the feeling of putting things together from scratch. I also enjoy jumping out of planes and throwing the occasional frisbee.",
    desc2: "I'm always aiming to deploy forward looking improvements, rather than dwelling on what went wrong, and if you got that Etherium reference, here's another: I LOVE to move fast and break things, even if that means invalidating prior assumptions ¯\\_(ツ)_/¯",
    cover: "./images/profile-picture.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <RocketLaunch />,
    title: "React.js",
    desc: "Experienced in working through Agile development cycles. Leveraged libraries such as Material UI, Express.js, Redux, Recoil, Axios, and Jest",
  },
  {
    id: 2,
    icon: <Code/>,
    title: "Javascript",
    desc: "One of my favorite coding languages. I am constantly exploring new libraries and ES6 features for web development such as Three.js, Anime.js, and Chart.js",
  },
  {
    id: 3,
    icon: <DataObject />,
    title: "Java",
    desc: "After four semesteres of being an embedded tutor for Data Structures at Davidson, I developed stronger skills in this language through student facilitation  ",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Python",
    desc: "My favorite tool for automation and data science. Experienced with libraries such as Selenium, Numpy, Pandas, Openpyxl, Scikit-Learn, and many more",
  },
  {
    id: 5,
    icon: <Insights />,
    title: "Machine Learning",
    desc: "Worked with the Next Gen team at Lowe's to build a new open source chatbot for their website, and improved the visual search model on their app (pyTorch).",
  },
  {
    id: 6,
    icon: <Storage />,
    title: "Databases",
    desc: "Still striving to develop my backend skills, but I am familiar and have worked with mySQL, PostgreSQL, Axios, Spring Boot, Express.js, Node.js, and MongoDB",
  },
]
export const project = [
  {
    id: 1,
    icon: <IntegrationInstructions />,
    num: "14",
    title: "PERSONAL PROJECTS",
  },
  {
    id: 2,
    icon: <VolunteerActivism />,
    num: "143",
    title: "HOURS VOLUNTEERED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "11",
    title: "COUNTRIES VISITED",
  },
  {
    id: 4,
    icon: <VideogameAssetOff />,
    num: "4",
    title: "GAMING CONTROLERS BROKEN",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "I was Maurilio's mentor for the 2022 Lowe's Software Engineering internship. When I first met Maurilio, I instantly knew that I was working with someone who is passionate about technology. Not only does Maurilio have passion, but he picks up things very quickly. I taught him React, Redux, Node in a very tight time frame of a month. He was able to take that knowledge and apply it directly to add value to applications at Lowe's. I look forward to working with Maurilio as a colleague in the future, he would be an excellent member to any team.",
    image: "./images/testimonials/team-1.jpeg",
    name: "William Mitchel",
    post: "Sr. Software Engineer at Lowe's",
  },
  
]
export const blog = [
  {
    id: 1,
    title: "Predicting the Price of Bitcoin Tomorrow",
    date: "May 8, 2022",
    author: "Maurilio Saddoud",
    desc: "For the final project of our Machine Learning course, Kostas and I set out to build a neural network model to predict the price of Bitcoin tomorrow (99.95% accuracy).",
    cover: "./images/blog/bitcoin graph.png",
  },
  {
    id: 2,
    title: "Random Pokemon Generator",
    date: "September 26, 2022",
    author: "Maurilio Saddoud",
    desc: "React app for my Full Stack Development Independent Study, leveraging useEffect to make api calls and components from the Material UI library",
    cover: "./images/blog/pokemon.png",
  },
  {
    id: 3,
    title: "Predicting Cancer Type from miRNA Reads",
    date: "April 25, 2022",
    author: "Maurilio Saddoud",
    desc: "In this study, Alex Donald and I built three models to predict what type of cancer patients have (96.99% accuracy).",
    cover: "./images/blog/cancer.png",
  },
  {
    id: 4,
    title: "Regenerative Design",
    date: "October 27, 2021",
    author: "Maurilio Saddoud",
    desc: "An assignment for my Critical Web Design course to demonstrate regenerative design (replayability). P.S. my highscore is 28 points in 30 seconds ;)",
    cover: "./images/blog/regenerative.png",
  },
  {
    id: 5,
    title: "Purchase Bot",
    date: "December, 2020",
    author: "Maurilio Saddoud",
    desc: "Using Selenium in Python, I built a purchase bot to finally secure a Playstation 5 for my brothers before Christmas.",
    cover: "./images/blog/ps5.png",
  },
  {
    id: 6,
    title: "BuzzFeed: the Gateway to Knowledge or Distraction?",
    date: "September 2019",
    author: "Maurilio Saddoud",
    desc: "In this essay, I thrust Nicholas Carr and Kathleen Fitzpatrick's juxtaposing positions on digital literacy in parallel using Buzzfeed.",
    cover: "./images/blog/buzzfeed.png",
  },
  {
    id: 7,
    title: "Big Pharma: the Missing Piece Energizing the Growing Incarceration Rates of the Mentally Ill",
    date: "December 14, 2019",
    author: "Maurilio Saddoud",
    desc: "",
    cover: "./images/blog/pharma.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "209 Ridge Rd",
    text2: "Davidson, NC, 28035",
  },
  {
    icon: <PhoneIphone />,
    text1: "770-815-9467",
  
  },
  {
    icon: <EmailOutlined />,
    text1: "masaddoud@davidson.edu",
    text2: "maurilio.saddoud@gmail.com",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
