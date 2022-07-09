import React from 'react';
import { Head } from 'next/head';

const MetaTitle = ({ title }) => {
  return (
    <div>
      <title>{title}</title>
    </div>

  );
};

export default MetaTitle;
