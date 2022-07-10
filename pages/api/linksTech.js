//TODO: винести linksTech в окреме місце
const linksTech = [
  {
    _id: 'link_1',
    gradient: {
      from: '#BBAAFF',
      to: '#5429FF'
    },
    upTitle: 'JS',
    downTitle: 'ES6',
    subTitle: 'DOM, Context, events, promises, OOP, axios, async, callbacks',
    link: 'https://www.w3schools.com/js/js_es6.asp'
  },
  {
    _id: 'link_2',
    gradient: {
      from: '#fc5dff',
      to: '#5dfdff'
    },
    upTitle: 'HTML',
    downTitle: '5',
    subTitle: 'Semantics, responsive, emmet, attributes, favicon, layout',
    link: 'https://www.w3schools.com/html/default.asp'
  },
  {
    _id: 'link_3',
    gradient: {
      from: '#FEAC5E',
      to: '#4BC0C8'
    },
    upTitle: 'CSS',
    downTitle: '3',
    subTitle: 'Box Model, tailwind, bem, Animations, Flexbox, SASS',
    link: 'https://www.w3schools.com/css/default.asp'
  },
  {
    _id: 'link_4',
    gradient: {
      from: '#76acfd',
      to: '#6ed0ff'
    },
    upTitle: 'GIT',
    downTitle: 'hub || lab',
    subTitle: 'init, commit, push, revert, stash, remote, branch, checkout',
    link: 'https://github.com/Zimenokk'
  },
  {
    _id: 'link_5',
    gradient: {
      from: '#c659ff',
      to: '#ff3f4d'
    },
    upTitle: 'React',
    downTitle: '16',
    subTitle: 'hooks, routing, events, promises, OOP, axios, async, callbacks',
    link: 'https://www.w3schools.com/js/js_es6.asp'
  },
  {
    _id: 'link_6',
    gradient: {
      from: '#3EA6EA',
      to: '#2179c1'
    },
    upTitle: 'JS',
    downTitle: 'ES6',
    subTitle: 'DOM, fetch API, events, promises, OOP, axios, async, callbacks',
    link: 'https://www.w3schools.com/js/js_es6.asp'
  },
  {
    _id: 'link_7',
    gradient: {
      from: '#e53935',
      to: '#e35d5b'
    },
    upTitle: 'JS',
    downTitle: 'ES6',
    subTitle: 'DOM, fetch API, events, promises, OOP, axios, async, callbacks',
    link: 'https://www.w3schools.com/js/js_es6.asp'
  },
  {
    _id: 'link_8',
    gradient: {
      from: '#FF385C',
      to: '#dd2e63'
    },
    upTitle: 'JS',
    downTitle: 'ES6',
    subTitle: 'DOM, fetch API, events, promises, OOP, axios, async, callbacks',
    link: 'https://www.w3schools.com/js/js_es6.asp'
  }
  // {
  //   _id: 'link_9',
  //   icon: {
  //     path: '/icons/emoji.svg',
  //     width: 90
  //   },
  //   gradient: {
  //     from: '#f6d365',
  //     to: '#fda085'
  //   },
  //   link: 'https://www.youtube.com/channel/UCdpPBwKPriPIP2eyP9a1C6g/join',
  //   title: 'Уникальный значок и эмоджи'
  // }
  // {
  //   _id: 'link_10',
  //   icon: {
  //     path: '/icons/boosty.svg',
  //     width: 160
  //   },
  //   gradient: {
  //     from: '#ff8d42',
  //     to: '#ff8257'
  //   },
  //   link: 'https://boosty.to/redgroup',
  //   title: 'Эксклюзивный контент'
  // }
];

export default function handler(req, res) {
  res.status(200).json(linksTech);
}