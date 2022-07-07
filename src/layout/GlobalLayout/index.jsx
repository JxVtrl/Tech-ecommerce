import React from 'react';
import { Header, Footer } from '../../section';

export function GlobalLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
  );
}