import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNum, setPageNum }) => {
    return <ReactPaginate 
        className="pagination"
        nextLabel='Far far away'
        previousLabel='Past'
        nextClassName='btn'
        previousClassName='btn'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        onPageChange={(data) => {
            setPageNum(data.selected + 1);
        }}
        pageCount={info?.pages}/>;
    //===info.pages === 42
};

export default Pagination;


    // let next = () => {
    //     setPageNum((x) => x + 1);
    // };
    // let prev = () => {
    //     if(pageNum === 1) return;
    //     setPageNum((x) => x - 1);
    // };
    // console.log(pageNum);

    // return <div className='containerPagination'>
    //     <button onClick={ prev }>Previous</button>
    //     <button onClick={ next }>Next</button>
    //     </div>;

