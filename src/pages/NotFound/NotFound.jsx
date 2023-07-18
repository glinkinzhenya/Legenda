import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className='not_found'>
      <button className='not_found_button'>
        <Link
          to={'/'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >Перейти на головну...
        </Link>
      </button>
      <h3 className='not_found-title'>Помилка 404</h3>
    </div>
  );
}
