import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function Nav() {
  const location = useLocation();
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);


  return (
    <Container>
      <List path={path} />
    </Container>
  );
}

function List({ path }) {
  const navigate = useNavigate();
  const list_div = document.getElementById('list')

  function checkActive(path) {
    if (path === '/home') {
      list_div.childNodes[0].classList.add('active');
    } else if (path === '/release') {
      list_div.childNodes[1].classList.add('active');
    } else if (path === '/mobiles') {
      list_div.childNodes[2].classList.add('active');
    } else if (path === '/consoles') {
      list_div.childNodes[3].classList.add('active');
    } else if (path === '/accessories') {
      list_div.childNodes[4].classList.add('active');
    }
  }

  useEffect(() => {
    checkActive(path);
  }, []);

  useEffect(() => {
    checkActive(path);
  }, [path]);

  
  return (
    <ul id='list'>
      <li onClick={() => navigate('/home')}>Home</li>
      <li onClick={() => navigate('/release')}>Releases</li>
      <li>Mobiles</li>
      <li>Consoles</li>
      <li>Accessories</li>
    </ul>
  )
}
