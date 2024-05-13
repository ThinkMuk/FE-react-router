import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/product/${text}`);
  };
  return (
    <>
      <h1>Menu Page</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setText(e.target.value)}></input>
        <button type='submit'>브랜드 페이지로 이동</button>
      </form>
    </>
  );
};

export default Menu;
