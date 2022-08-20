const LatestBooks = require("../models/latestBooksModel");
const RecentBooks = require("../models/recentBooksModel");

exports.latestBooks = async (req, res) => {
  try {
    const latestbooks = await LatestBooks.find();
    const recentbooks = await RecentBooks.find();

    console.log(
      "recentbooks",
      recentbooks.map((book) => book)
    );

    res.status(200).json({
      success: true,
      latestbooks,
      recentbooks,
    });
  } catch (error) {
    console.log("error");
  }
};

exports.latestBookPost = async (req, res) => {
  try {
    let newBook = new LatestBooks(req.body);
    console.log("newBook", newBook);
    await newBook.save();
  } catch (error) {
    console.log("error");
  }
};

exports.recentBook = async (req, res) => {
  try {
    let newBook = new RecentBooks(req.body);
    console.log("newBook", newBook);
    await newBook.save();
  } catch (error) {
    console.log("error");
  }
};

const cards = [
  {
    id: 1,
    cards: [
      {
        id: 1,
        image:
          "https://images.routledge.com/common/jackets/crclarge/978042927/9780429274848.jpg",
        title: "Organic Chemistry1",
      },
      {
        id: 2,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71tZfrRNN9L.jpg",
        title: "Organic Chemistry2",
      },
      {
        id: 3,
        image: "https://fivebooks.com/app/uploads/books/BC_014311882X.jpg",
        title: "Organic Chemistry3",
      },
    ],
  },
  {
    id: 2,
    cards: [
      {
        id: 4,
        image:
          "https://5.imimg.com/data5/YJ/BA/MY-4916878/interactive-organic-chemistry-books-500x500.jpg",
        title: "Organic Chemistry4",
      },
      {
        id: 5,
        image:
          "https://1.bp.blogspot.com/-tWUfgQDdl3g/Xw7rB3TlWBI/AAAAAAAAB6M/fuf4joLL1UcpQZUyevF4X0aQ1ts9SkKKACLcBGAsYHQ/s1600/Chemistry%2Bin%2BContext%2B9th%2BEdition%2BAmerican.JPG",
        title: "Organic Chemistry5",
      },
      {
        id: 6,
        image: "https://textbookcentre.com/media/products/2010107000230.jpg",
        title: "Organic Chemistry6",
      },
    ],
  },
];

const allbooks = [
  {
    id: 1,
    cards: [
      {
        image:
          "https://www.wisemansbookstrading.com/wp-content/uploads/2019/05/HANDBOOK-MANUAL-IN-FORENSIC-CHEMISTRY.jpg",
        title: "Forensic Chemistry ",
        rating: 3.95,
        ratings: 186,
        posted_by: "Ardit Qerimi",
        date: "12/08/2022",
        reviews: 83,
      },
      {
        image:
          "https://gcecompilation.com/wp-content/uploads/2017/11/chemistry-696x918.jpg",
        title: "Chemistry Matters ",
        rating: 4.2,
        ratings: 136,
        posted_by: "Ardit Qerimi",
        date: "12/08/2022",
        reviews: 94,
      },
      {
        image:
          "https://th.bing.com/th/id/R.56693c2ba815cdaedfa350e95dbef296?rik=9dRrhH2jYMnfpg&riu=http%3a%2f%2fimages.amazon.com%2fimages%2fP%2f0134347765.01.LZZZZZZZ.jpg&ehk=J8CtKr4OUXFKViFv8D6IdBzZc8DGBc6cLB5t0QIqHjM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        title: "Chemistry",
        rating: 4.6,
        ratings: 130,
        posted_by: "Ardit Qerimi",
        date: "12/08/2022",
        reviews: 56,
      },
    ],
  },
  {
    id: 2,
    cards: [
      {
        image:
          "https://www.wisemansbookstrading.com/wp-content/uploads/2019/05/HANDBOOK-MANUAL-IN-FORENSIC-CHEMISTRY.jpg",
        title: "Forensic Chemistry ",
        rating: 3.95,
        ratings: 186,
        posted_by: "Ardit Qerimi",
        date: "12/08/2022",
        reviews: 83,
      },
      {
        image:
          "https://gcecompilation.com/wp-content/uploads/2017/11/chemistry-696x918.jpg",
        title: "Chemistry Matters ",
        rating: 4.2,
        ratings: 136,
        posted_by: "Ardit Qerimi",
        date: "12/08/2022",
        reviews: 94,
      },
      {
        image:
          "https://th.bing.com/th/id/R.56693c2ba815cdaedfa350e95dbef296?rik=9dRrhH2jYMnfpg&riu=http%3a%2f%2fimages.amazon.com%2fimages%2fP%2f0134347765.01.LZZZZZZZ.jpg&ehk=J8CtKr4OUXFKViFv8D6IdBzZc8DGBc6cLB5t0QIqHjM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        title: "Chemistry",
        rating: 4.6,
        ratings: 130,
        posted_by: "Ardit Qerimi",
        date: "12/08/2022",
        reviews: 56,
      },
    ],
  },
];

const allrecentbooks = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/R.41baa82b36bd0ba73276ce6949c1363d?rik=LstEQ0ttBX5jRg&pid=ImgRaw&r=0",
    title: "Chemistry Science",
    rating: 3.3,
    ratings: 140,
    posted_by: "Ardit Qerimi",
    date: "13/08/2022",
    reviews: 30,
  },
  {
    id: 2,
    image:
      "https://n2.sdlcdn.com/imgs/i/q/9/Textbook-Of-Physical-Chemistry-Vol-SDL770161936-1-f60d3.jpg",
    title: "Physical Chemistry ",
    rating: 3.5,
    ratings: 164,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 35,
  },
  {
    id: 3,
    image:
      "https://covers.zlibcdn2.com/covers/books/96/a4/c0/96a4c00f81adf50278329fd9cb1a6772.jpg",
    title: "Indroductory Chemistry ",
    rating: 3.55,
    ratings: 156,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 63,
  },
  {
    id: 4,
    image:
      "https://www.wisemansbookstrading.com/wp-content/uploads/2019/05/HANDBOOK-MANUAL-IN-FORENSIC-CHEMISTRY.jpg",
    title: "Forensic Chemistry ",
    rating: 3.95,
    ratings: 186,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 83,
  },
  {
    id: 5,
    image:
      "https://gcecompilation.com/wp-content/uploads/2017/11/chemistry-696x918.jpg",
    title: "Chemistry Matters ",
    rating: 4.2,
    ratings: 136,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 94,
  },
  {
    id: 6,
    image:
      "https://th.bing.com/th/id/R.56693c2ba815cdaedfa350e95dbef296?rik=9dRrhH2jYMnfpg&riu=http%3a%2f%2fimages.amazon.com%2fimages%2fP%2f0134347765.01.LZZZZZZZ.jpg&ehk=J8CtKr4OUXFKViFv8D6IdBzZc8DGBc6cLB5t0QIqHjM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    title: "Chemistry",
    rating: 4.6,
    ratings: 130,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 56,
  },

  {
    id: 7,
    image:
      "https://th.bing.com/th/id/R.56693c2ba815cdaedfa350e95dbef296?rik=9dRrhH2jYMnfpg&riu=http%3a%2f%2fimages.amazon.com%2fimages%2fP%2f0134347765.01.LZZZZZZZ.jpg&ehk=J8CtKr4OUXFKViFv8D6IdBzZc8DGBc6cLB5t0QIqHjM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    title: "Chemistry",
    rating: 4.1,
    ratings: 130,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 56,
  },
];

// RecentBooks.insertMany(allrecentbooks)
//   .then(function () {
//     console.log("Data inserted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });

// LatestBooks.insertMany(cards)
//   .then(function () {
//     console.log("Data inserted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });
