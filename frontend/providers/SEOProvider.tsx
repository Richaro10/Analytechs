import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface Props {
  children: React.ReactNode;
}

const SEOProvider = ({ children }: Props) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default SEOProvider;
