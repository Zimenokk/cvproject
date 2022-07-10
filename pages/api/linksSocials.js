//TODO: винести linksTech в окреме місце
const linksTech = [
  {
    _id: 'link_1',
    gradient: {
      from: '#0077B5',
      to: '#00A0DC'
    },
    upTitle: 'LinkedIn',
    downTitle: '',
    subTitle: '',
    link: 'https://www.linkedin.com/in/daniil-zymenok-67a00b18a/'
  },
  {
    _id: 'link_2',
    gradient: {
      from: '#6E5494',
      to: '#4078C0'
    },
    upTitle: 'GitHub',
    downTitle: '',
    subTitle: '',
    link: 'https://github.com/Zimenokk'
  },
  {
    _id: 'link_3',
    gradient: {
      from: '#E24329',
      to: '#FCA326'
    },
    upTitle: 'GitLab',
    downTitle: '',
    subTitle: '',
    link: 'https://gitlab.com/Zimenokk'
  },
  {
    _id: 'link_4',
    gradient: {
      from: '#1E96C8',
      to: '#4ABEF1'
    },
    upTitle: 'Telegram',
    downTitle: '',
    subTitle: '',
    link: 'https://t.me/Zimenokk'
  }

];

export default function handler(req, res) {
  res.status(200).json(linksTech);
}