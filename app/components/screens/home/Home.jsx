import React from 'react';

const Home = () => {
  return (
    <div>
      Home
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {

  const links = await axios.get()

  return {
    props: {
      links, me
    },
    revalidate: 60
  };
};
