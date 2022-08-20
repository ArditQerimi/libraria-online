import React, { useState, useEffect } from "react";
import className from "./CardCarousel.module.css";
import axios from "axios";

import { BsBook } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CardCarousel = ({ cards, latestBooks, setLatestBooks }) => {
  const [newCard, setNewCard] = useState([]);
  const [newCard950, setNewCard950] = useState([]);
  const [newCard730, setNewCard730] = useState([]);

  useEffect(() => {
    setNewCard([
      { id: Math.random(), cards: latestBooks.slice(-3).reverse() },
      {
        id: Math.random(),
        cards: latestBooks.slice(-6, -3).reverse(),
      },
    ]);

    setNewCard950([
      { id: Math.random(), cards: latestBooks.slice(-2).reverse() },
      {
        id: Math.random(),
        cards: latestBooks.slice(-4, -2).reverse(),
      },
      {
        id: Math.random(),
        cards: latestBooks.slice(-6, -4).reverse(),
      },
    ]);

    setNewCard730([
      { id: Math.random(), cards: latestBooks.slice(-1) },
      {
        id: Math.random(),
        cards: latestBooks.slice(-2, -1),
      },
      {
        id: Math.random(),
        cards: latestBooks.slice(-3, -2),
      },
      {
        id: Math.random(),
        cards: latestBooks.slice(-4, -3),
      },
      {
        id: Math.random(),
        cards: latestBooks.slice(-5, -4),
      },
      {
        id: Math.random(),
        cards: latestBooks.slice(-6, -5),
      },
    ]);
  }, [latestBooks]);

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
      <>
        <div className={className.latest_books__container}>
          <h1 className={className.latest_section__title}>Latest books</h1>

          {latestBooks.length > 0 ? (
            <>
              <div className={className.card_carousel__container}>
                {newCard?.map((card, index) => {
                  return (
                    index === changeIndex &&
                    card.cards?.map((card, index) => {
                      return (
                        <div
                          key={index}
                          className={className.card_big__container}
                        >
                          <div className={className.card__container}>
                            <a className={className.card__link} href="">
                              <div className={className.card_image__container}>
                                <img
                                  className={className.card_img}
                                  src={card.image}
                                  alt=""
                                />
                              </div>
                              <div
                                className={
                                  className.card_description__container
                                }
                              >
                                <h2 className={className.card_title}>
                                  {card.title}
                                </h2>
                              </div>
                              <div className={className.read_more__container}>
                                <BsBook size={20} color={"#d61c4e"} />
                                <a
                                  className={className.source_anchor}
                                  target="_blank"
                                >
                                  <div className={className.read_more}>
                                    Read more
                                  </div>
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
              {latestBooks.length > 3 && (
                <div className={className.carousel__buttons}>
                  <FaChevronLeft
                    className={className.carousel_btn}
                    onClick={decrease}
                    size={20}
                    // color={"#d61c4e"}
                    style={{ cursor: "pointer" }}
                  />
                  <FaChevronRight
                    className={className.carousel_btn}
                    onClick={increase}
                    size={20}
                    // color={"#d61c4e"}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}

              <div className={className.card_carousel__container950}>
                {newCard950?.map((card, index) => {
                  return (
                    index === changeIndex &&
                    card.cards?.map((card, index) => {
                      return (
                        <div
                          key={index}
                          className={className.card_big__container}
                        >
                          <div className={className.card__container}>
                            <a className={className.card__link} href="">
                              <div className={className.card_image__container}>
                                <img
                                  className={className.card_img}
                                  src={card.image}
                                  alt=""
                                />
                              </div>
                              <div
                                className={
                                  className.card_description__container
                                }
                              >
                                <h2 className={className.card_title}>
                                  {card.title}
                                </h2>
                              </div>
                              <div className={className.read_more__container}>
                                <BsBook size={20} color={"#d61c4e"} />
                                <a
                                  className={className.source_anchor}
                                  target="_blank"
                                >
                                  <div className={className.read_more}>
                                    Read more
                                  </div>
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
                <FaChevronLeft
                  className={className.carousel_btn}
                  onClick={decrease950}
                  size={20}
                  // color={"#d61c4e"}
                  style={{ cursor: "pointer" }}
                />
                <FaChevronRight
                  className={className.carousel_btn}
                  onClick={increase950}
                  size={20}
                  // color={"#d61c4e"}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={className.card_carousel__container730}>
                {newCard730?.map((card, index) => {
                  return (
                    index === changeIndex &&
                    card.cards?.map((card, index) => {
                      return (
                        <div
                          key={index}
                          className={className.card_big__container}
                        >
                          <div className={className.card__container}>
                            <a className={className.card__link} href="">
                              <div className={className.card_image__container}>
                                <img
                                  className={className.card_img}
                                  src={card.image}
                                  alt=""
                                />
                              </div>
                              <div
                                className={
                                  className.card_description__container
                                }
                              >
                                <h2 className={className.card_title}>
                                  {card.title}
                                </h2>
                              </div>
                              <div className={className.read_more__container}>
                                <BsBook size={20} color={"#d61c4e"} />
                                <a
                                  className={className.source_anchor}
                                  target="_blank"
                                >
                                  <div
                                    className={className.read_more}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Read more
                                  </div>
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
                <FaChevronLeft
                  className={className.carousel_btn}
                  onClick={decrease730}
                  size={20}
                  // color={"#d61c4e"}
                  style={{ cursor: "pointer" }}
                />
                <FaChevronRight
                  className={className.carousel_btn}
                  onClick={increase730}
                  size={20}
                  // color={"#d61c4e"}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              Internet connection lost! Or there isn't posted any book yet!
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default CardCarousel;
