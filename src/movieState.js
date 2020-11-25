//Import Images

import mainhstore from "./img/mainhstore.png"
import secondaryhstore from "./img/secondaryhstore.png"
import lpstore from './img/lpstore.png'
import lpstore2 from './img/lpstore2.png'
import bpong from './img/bpong.png'
import bpong2 from './img/bpong2.png'

export const ProjectState = () => {
  return [
    
    {
      title: "H-store",
      mainImg: mainhstore,
      url: "/work/h-store",
      secondaryImg: secondaryhstore,
      awards: [
        {
          title: "The hungarian food webshop.",
          description:
            "This project is in progress right now. You can check the physical shop in Gothenburg if you are interested in the taste of Hungarian food. Adress: Gustaf Dalénsgatan 30 417 24 Göteborg ",
        },
        {
          title: "Final project.",
          description:
            "This is going to be my final project for the school. Planned release date is around december.",
        },
        
      ],
    },
    {
      title: "LP-Shop",
      mainImg: lpstore,
      url: "/work/lp-shop",
      secondaryImg: lpstore2,
      awards: [
        {
          title: "LP Webshop.",
          description:
            "It was one of our projects in the school in a small group from last year, which was our first year as Front-End Developer students. ",
        },
        {
          title: "Back-End Course",
          description:
            "It was the first project when we needed to use both Back-End and Front-End for a 'bigger' project.",
        },
        
      ],
    },
    {
      title: "Battle Pong",
      mainImg: bpong,
      url: "/work/battle-pong",
      secondaryImg: bpong2,
      awards: [
        {
          title: "Game Project.",
          description:
            "The one and only game project that we had in our education program in a group of 5 people. ",
        },
        {
          title: "The challenge",
          description:
            "The biggest challenge with this project was to work with the ball physics. It was really a pain. For that project we used Typescript and p5.js",
        },
        
      ],
    },
  ];
};
