import React from 'react';
import Img from '../../assets/img/logo.png'
// import { Container } from './styles';

export function Logo() {
  return (
    <>
      <img style={{cursor: 'pointer'}} src={Img} alt="logo" width={60} />
    </>
  );
}
