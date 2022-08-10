import React, { useState, useEffect } from "react";
import className from "./CardCarousel.module.css";
import axios from "axios";

import { BsBook } from "react-icons/bs";

// const cards = [
//   {
//     id: 1,
//     cards: [
//       {
//         id: 1,
//         image:
//           "https://images.routledge.com/common/jackets/crclarge/978042927/9780429274848.jpg",
//         title: "Organic Chemistry1",
//       },
//       {
//         id: 2,
//         image:
//           "https://images-na.ssl-images-amazon.com/images/I/71tZfrRNN9L.jpg",
//         title: "Organic Chemistry2",
//       },
//       {
//         id: 3,
//         image: "https://fivebooks.com/app/uploads/books/BC_014311882X.jpg",
//         title: "Organic Chemistry3",
//       },
//     ],
//   },
//   {
//     id: 2,
//     cards: [
//       {
//         id: 4,
//         image:
//           "https://5.imimg.com/data5/YJ/BA/MY-4916878/interactive-organic-chemistry-books-500x500.jpg",
//         title: "Organic Chemistry4",
//       },
//       {
//         id: 5,
//         image:
//           "https://1.bp.blogspot.com/-tWUfgQDdl3g/Xw7rB3TlWBI/AAAAAAAAB6M/fuf4joLL1UcpQZUyevF4X0aQ1ts9SkKKACLcBGAsYHQ/s1600/Chemistry%2Bin%2BContext%2B9th%2BEdition%2BAmerican.JPG",
//         title: "Organic Chemistry5",
//       },
//       {
//         id: 6,
//         image: "https://textbookcentre.com/media/products/2010107000230.jpg",
//         title: "Organic Chemistry6",
//       },
//     ],
//   },
// ];

const CardCarousel = ({ cards, latestBook }) => {
  console.log(
    latestBook[0]?.cards?.map((card) => {
      return { ...card };
    })
  );

  const cardsCopy = [...cards];
  // console.log(cardsCopy[0].cards);

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");

  const [newCard, setNewCard] = useState(cards);
  console.log(newCard);

  const [newCard950, setNewCard950] = useState(newCard);

  const [newCard730, setNewCard730] = useState(newCard950);
  // console.log(newCard730);

  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    // console.log(cards[0]?.cards);
    setNewCard([
      { id: Math.random(), cards: cardsCopy[0]?.cards },
      { id: Math.random(), cards: cardsCopy[1]?.cards },
    ]);
  }, [cards]);

  useEffect(() => {
    const cards0popped = newCard[0]?.cards?.slice(-1);

    const cards1popped = newCard[1]?.cards?.slice(-1);

    const cards2Obj = newCard[1]?.cards?.slice(0, 1);

    const concat = cards2Obj?.concat(cards0popped);

    const card = newCard[1]?.cards?.slice(1, 2);
    // console.log(card);
    const concat1 = card?.concat(cards1popped);
    setNewCard950([
      { id: Math.random(), cards: newCard[0]?.cards?.slice(0, 2) },
      {
        id: Math.random(),
        cards: concat?.reverse(),
      },
      { id: Math.random(), cards: concat1 },
    ]);
  }, [newCard]);

  useEffect(() => {
    const cardsarr1 = newCard950[0]?.cards?.slice(0, 1);

    const cardsarr2 = newCard950[0]?.cards?.slice(-1);

    const cardsarr3 = newCard950[1]?.cards?.slice(0, 1);
    const cardsarr4 = newCard950[1]?.cards?.slice(-1);

    const cardsarr5 = newCard950[2]?.cards?.slice(0, 1);

    const cardsarr6 = newCard950[2]?.cards?.slice(-1);

    setNewCard730([
      {
        id: Math.random(),
        cards: cardsarr1,
      },
      {
        id: Math.random(),
        cards: cardsarr2,
      },
      {
        id: Math.random(),
        cards: cardsarr3,
      },
      {
        id: Math.random(),
        cards: cardsarr4,
      },
      {
        id: Math.random(),
        cards: cardsarr5,
      },
      {
        id: Math.random(),
        cards: cardsarr6,
      },
    ]);
  }, [newCard950]);

  const onNewCard = () => {
    cardsCopy[0]?.cards.unshift(
      latestBook[0]?.cards?.map((card) => {
        return { card };
      })
    );
    // cardsCopy[0]?.cards.unshift({
    //   id: Math.random(),
    //   title: title,
    //   image: img,
    // });
    const cards0popped = cardsCopy[0].cards.pop();
    cardsCopy[1].cards.unshift(cards0popped);
    const cards1popped = cardsCopy[1].cards.pop();
    setNewCard([
      { id: Math.random(), cards: cardsCopy[0].cards },
      { id: Math.random(), cards: cardsCopy[1].cards },
    ]);

    axios
      .post("http://localhost:8080/", {
        cards: { id: Math.random(), title: title, image: img },
      })
      .then((res) => console.log(res.data));
  };

  const [changeIndex, setChangeIndex] = useState(0);

  const increase = () => {
    setChangeIndex((prevState) => {
      if (prevState >= newCard.length - 1) return (prevState = 0);
      else return (prevState += 1);
    });
  };

  const decrease = () => {
    setChangeIndex((prevState) => {
      if (prevState < 1) return (prevState = newCard.length - 1);
      else return (prevState -= 1);
    });
  };

  const increase950 = () => {
    setChangeIndex((prevState) => {
      if (prevState >= newCard950.length - 1) return (prevState = 0);
      else return (prevState += 1);
    });
  };

  const decrease950 = () => {
    setChangeIndex((prevState) => {
      if (prevState < 1) return (prevState = newCard950.length - 1);
      else return (prevState -= 1);
    });
  };

  const increase730 = () => {
    setChangeIndex((prevState) => {
      if (prevState >= newCard730.length - 1) return (prevState = 0);
      else return (prevState += 1);
    });
  };

  const decrease730 = () => {
    setChangeIndex((prevState) => {
      if (prevState < 1) return (prevState = newCard730.length - 1);
      else return (prevState -= 1);
    });
  };

  return (
    <>
      <div className={className.latest_books__container}>
        <h1 className={className.latest_section__title}>Latest books</h1>
        <div className={className.card_carousel__container}>
          {newCard?.map((card, index) => {
            return (
              index === changeIndex &&
              card.cards?.map((card, index) => {
                return (
                  <div key={index} className={className.card_big__container}>
                    <div className={className.card__container}>
                      <a className={className.card__link} href="">
                        <div className={className.card_image__container}>
                          <img
                            className={className.card_img}
                            src={card.image}
                            alt=""
                          />
                        </div>
                        <div className={className.card_description__container}>
                          <h2>{card.title}</h2>
                          <div className={className.techs}>
                            <div className={className.tech}>
                              Description comes here!
                            </div>
                          </div>
                        </div>
                        <div className={className.read_more__container}>
                          <BsBook size={20} color={"#d61c4e"} />
                          <a
                            className={className.source_anchor}
                            target="_blank"
                          >
                            <div className={className.read_more}>Read more</div>
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })
            );
          })}
        </div>
        <div className={className.carousel__buttons}>
          <div
            className={className.carousel_btn}
            onClick={decrease}
            style={{ cursor: "pointer" }}
          >
            Prev
          </div>
          <div
            className={className.carousel_btn}
            onClick={increase}
            style={{ cursor: "pointer" }}
          >
            Next
          </div>
        </div>
        <div className={className.card_carousel__container950}>
          {newCard950?.map((card, index) => {
            return (
              index === changeIndex &&
              card.cards?.map((card, index) => {
                return (
                  <div key={index} className={className.card_big__container}>
                    <div className={className.card__container}>
                      <a className={className.card__link} href="">
                        <div className={className.card_image__container}>
                          <img
                            className={className.card_img}
                            src={card.image}
                            alt=""
                          />
                        </div>
                        <div className={className.card_description__container}>
                          <h2>{card.title}</h2>
                          <div className={className.techs}>
                            <div className={className.tech}>
                              Description comes here!
                            </div>
                          </div>
                        </div>
                        <div className={className.read_more__container}>
                          <BsBook size={20} color={"#d61c4e"} />
                          <a
                            className={className.source_anchor}
                            target="_blank"
                          >
                            <div className={className.read_more}>Read more</div>
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })
            );
          })}
        </div>
        <div className={className.carousel__buttons950}>
          <div
            className={className.carousel_btn}
            onClick={decrease950}
            style={{ cursor: "pointer" }}
          >
            Prev
          </div>
          <div
            className={className.carousel_btn}
            onClick={increase950}
            style={{ cursor: "pointer" }}
          >
            Next
          </div>
        </div>
        <div className={className.card_carousel__container730}>
          {newCard730?.map((card, index) => {
            return (
              index === changeIndex &&
              card.cards?.map((card, index) => {
                return (
                  <div key={index} className={className.card_big__container}>
                    <div className={className.card__container}>
                      <a className={className.card__link} href="">
                        <div className={className.card_image__container}>
                          <img
                            className={className.card_img}
                            src={card.image}
                            alt=""
                          />
                        </div>
                        <div className={className.card_description__container}>
                          <h2>{card.title}</h2>
                          <div className={className.techs}>
                            <div className={className.tech}>
                              Description comes here!
                            </div>
                          </div>
                        </div>
                        <div className={className.read_more__container}>
                          <BsBook size={20} color={"#d61c4e"} />
                          <a
                            className={className.source_anchor}
                            target="_blank"
                          >
                            <div className={className.read_more}>Read more</div>
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })
            );
          })}
        </div>
        <div className={className.carousel__buttons730}>
          <div
            className={className.carousel_btn}
            onClick={decrease730}
            style={{ cursor: "pointer" }}
          >
            Prev
          </div>
          <div
            className={className.carousel_btn}
            onClick={increase730}
            style={{ cursor: "pointer" }}
          >
            Next
          </div>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="title.."
          value={title}
          onChange={(e) => handleTitle(e)}
        />
        <input
          type="text"
          placeholder="image.."
          value={img}
          onChange={(e) => handleImg(e)}
        />
        <div className={className.submitBtn} onClick={() => onNewCard()}>
          Submit
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
