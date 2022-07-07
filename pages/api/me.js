const me = {
  siteName: 'Zimenokk CV',
  avatar: '/avatar.jpeg',
  description:
    `<p>Hello, I'm Daniel, 20 years old.</p>` +
    `<p>Worked as a web designer, now I do web development in JS, TS, React. </p>` +
    `<p>I have all the required skills for a Junior frontend developer.</p>` +
    `<p>Every day I devote at least 2-4 hours to development. </p>` +
    `<p>I believe that constant execution of the plan leads to great results.</p>`
};

export default function handler(req, res) {
  res.status(200).json(me);
}