import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Генерируем список ссылок на страницы
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          className={`pagination-number ${currentPage === i ? 'pagination-active' : ''}`}
          key={i}
        // onClick={() => onPageChange(i)}
        >
          {i}
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      {totalPages > 1 ?
        <div className="pagination">


          {currentPage > 1 ? <div className='pagination-arrow' onClick={() => onPageChange(currentPage - 1)}>
            <ArrowBackIosNewIcon sx={{ color: 'white' }} />
          </div>
            :
            <div className='pagination-arrow__off'></div>
          }

          {renderPageNumbers()}

          {currentPage < totalPages ? <div className='pagination-arrow' onClick={() => onPageChange(currentPage + 1)}>
            <ArrowForwardIosIcon sx={{ color: 'white' }} />
          </div> :
            <div className='pagination-arrow__off'></div>
          }
        </div>

        :
        ""
      }
    </>
  );
};

export default Pagination;