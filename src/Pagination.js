import React, { useState, useContext } from "react";
import './Pagination.css';
import Pagination from "react-js-pagination";
import { StateContext, DispatchContext } from './Context'

const Paging = () => {
  const {pageNo} = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  //const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    //setPage(page);
    dispatch({type: 'SET', name: 'pageNo', value: page});
  };

  return (
    <Pagination
      activePage={pageNo}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
