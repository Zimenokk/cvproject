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
    subTitle: 'hooks, routing, Forms, Rendering, Lifecycle, Testing, ReactDOM',
    link: 'https://reactjs.org'
  },
  {
    _id: 'link_6',
    gradient: {
      from: '#3EA6EA',
      to: '#2179c1'
    },
    upTitle: 'TS',
    downTitle: '4.7.4',
    subTitle: 'Generics, Classes, Decorators, Enums, tsx, interfaces, Symbols, callbacks',
    link: 'https://www.typescriptlang.org'
  },
  {
    _id: 'link_7',
    gradient: {
      from: '#e53935',
      to: '#e35d5b'
    },
    upTitle: 'NEXT',
    downTitle: 'js',
    subTitle: 'routing, api, ssg, config, deployment, auth',
    link: 'https://nextjs.org'
  },
  {
    _id: 'link_8',
    gradient: {
      from: '#FF385C',
      to: '#dd2e63'
    },
    upTitle: 'basic',
    downTitle: 'knowledge',
    subTitle: 'p-management, jira, scrum/agile, figma, algorithms, cli, docker',
    link: 'https://github.com/Zimenokk/Zimenokk'
  }

];

export default function handler(req, res) {
  res.status(200).json(linksTech);
}