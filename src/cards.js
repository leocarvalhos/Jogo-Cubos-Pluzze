import Heroku from "./assets/heroku.png";
import HtmlCss from "./assets/htmlcss.png";
import Javascript from "./assets/javascript.png";
import Netlify from "./assets/netlify.png";
import Nodejs from "./assets/nodejs.png";
import React from "./assets/react.png";
import CardBack from "./assets/card-back.png";
import Congrats from "./assets/congrats.png";
import { useState } from "react";
export default function Cards() {
  const cardsInitial = [
    {
      id: 1,
      slug: "heroku",
      image: Heroku,
      turned: false,
    },
    {
      id: 2,
      slug: "htmlcss",
      image: HtmlCss,
      turned: false,
    },
    {
      id: 3,
      slug: "htmlcss",
      image: HtmlCss,
      turned: false,
    },
    {
      id: 4,
      slug: "javascript",
      image: Javascript,
      turned: false,
    },
    {
      id: 5,
      slug: "heroku",
      image: Heroku,
      turned: false,
    },
    {
      id: 6,
      slug: "netlify",
      image: Netlify,
      turned: false,
    },
    {
      id: 7,
      slug: "nodejs",
      image: Nodejs,
      turned: false,
    },
    {
      id: 8,
      slug: "javascript",
      image: Javascript,
      turned: false,
    },
    {
      id: 9,
      slug: "netlify",
      image: Netlify,
      turned: false,
    },
    {
      id: 10,
      slug: "react",
      image: React,
      turned: false,
    },
    {
      id: 11,
      slug: "nodejs",
      image: Nodejs,
      turned: false,
    },
    {
      id: 12,
      slug: "react",
      image: React,
      turned: false,
    },
  ];
  const [cards, setCards] = useState([...cardsInitial]);
  function handleResert() {
    setCards(cardsInitial);
  }
  function handlerVerify(card) {
    const cardTurned = cards.find((item) => {
      return item.turned;
    });

    if (cardTurned) {
      if (cardTurned.id === card.id) return;
      if (cardTurned.slug === card.slug) {
        setTimeout(() => {
          const otherCards = cards.filter((item) => item.slug !== card.slug);
          setCards(otherCards);
        }, 700);
      } else {
        setTimeout(() => {
          cards.forEach((item) => (item.turned = false));
          return setCards([...cards]);
        }, 700);
      }
    }
  }

  function handlerPageTurn(card) {
    const cardTurn = cards.filter((item) => item.id !== card.id);
    const newCards = [...cardTurn, { ...card, turned: true }];
    newCards.sort((a, b) => a.id - b.id);
    setCards(newCards);
    handlerVerify(card);
  }
  return (
    <div className="container">
      <div className="side-bar">
        <span>CUBOS PUZZLE</span>
        <button type="text" onClick={handleResert}>
          RESET
        </button>
      </div>
      <div className="cards">
        {cards.map((card) => {
          return <img className="card" src={card.turned ? card.image : CardBack} key={card.id} onClick={() => handlerPageTurn(card)} alt="x" />;
        })}
        {cards.length === 0 && <img className="congrats" src={Congrats} alt="congrats" />}
      </div>
    </div>
  );
}
