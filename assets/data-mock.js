export const authorsMock = [
  {
    id: 1,
    name: "stephen king",
    books: [
      { title: "Salem's Lot" },
      { title: "Night Shift" },
      { title: "The Stand" },
      { title: "Cujo" },
      { title: "The Dead Zone" },
    ],
  },
  {
    id: 2,
    name: "john lenon",
    books: [
      { title: "Let It Be" },
      { title: "Here Comes the Sun" },
      { title: "Get Back" },
      { title: "Hey Jude" },
      { title: "Jealous Guy" },
    ],
  },
  {
    id: 3,
    name: "taylor swift",
    books: [
      { title: "Blank Space" },
      { title: "All Too Well" },
      { title: "I Knew You Were Trouble" },
      { title: "Shake it Off" },
      { title: "Style" },
    ],
  },
];

export const booksMock = [
  {
    id: 12331,
    title: "gold salem 2",
    author: authorsMock[0],
    text: "TEXT",
    cover:
      "http://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/028/28129-1.JPG",
  },
  {
    id: 323,
    title: "Salem's Lot",
    author: authorsMock[0],
    text: "TEXT",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Salemslotthemovie.jpg/225px-Salemslotthemovie.jpg",
  },
  {
    id: 1254331,
    title: "Shake it Off",
    author: authorsMock[2],
    text: "TEXT",
    cover: "https://i1.sndcdn.com/artworks-000098476593-x1swsu-t500x500.jpg",
  },
  {
    id: 661,
    title: "Let It Be",
    author: authorsMock[0],
    text: "TEXT",
    cover:
      "https://s.tmimgcdn.com/scr/1200x750/109300/let-it-b-bitcoin-and-crypto-company-business-logo-template_109372-original.jpg",
  },
  {
    id: 2314,
    title: "The Stand",
    author: authorsMock[0],
    text: "TEXT",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/The_Stand_cover.jpg/220px-The_Stand_cover.jpg",
  },
];
