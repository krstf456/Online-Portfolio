//Import Images

import mainhstore from "./img/mainhstore.png"
import secondaryhstore from "./img/secondaryhstore.png"

export const MovieState = () => {
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
            "This project is inprogress right now. You can check the physical shop in Gothenburg if you are interested in the taste of Hungarian food. Adress: Gustaf Dalénsgatan 30 417 24 Göteborg ",
        },
        {
          title: "Final project.",
          description:
            "This is gonna be my final project for the school. Planned release date is around december.",
        },
        
      ],
    },
  ];
};
