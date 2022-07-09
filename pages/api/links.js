//TODO: винести links в окреме місце
const links = [
  {
    _id: 'link_1',
    icon: {
      path: '/icons/firstVariantImg',
      width: 76
    },
    gradient: {
      from: '#',
      to: '#'
    },
    link: '',
    title: 'First proj'
  },
  {
    _id: 'link_2',
    icon: {
      path: '/icons/firstVariantImg',
      width: 76
    },
    gradient: {
      from: '#',
      to: '#'
    },
    link: '',
    title: 'First proj'
  }

];

export default function handler(req, res) {
  res.status(200).json(links);
}