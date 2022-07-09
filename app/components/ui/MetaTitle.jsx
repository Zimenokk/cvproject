import React from 'react';
import { Head } from 'next/head';

const MetaTitle = ({ title }) => {
  //TODO:замість div в оригіналі елемент <Head>
  return (
    <div>
      <title>{title}</title>
    </div>

  );
};

export default MetaTitle;
