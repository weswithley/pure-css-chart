// library
import React, { useContext, useRef } from 'react';

// action
import { actionFilterList } from '../action/action';

// context
import { MainContext } from '../context/context';

export const Search = () => {
  const { newDataList, dataList, newPaginationSettings, mainlyReducerDispatch, paginationStateDispatch } = useContext(MainContext);
  const searchInputRef = useRef(null);

  const onSubmit = () => {
    const searchKeyword = searchInputRef.current.value;
    const params = {
      type: actionFilterList.SEARCH,
      searchKeyword: searchKeyword,
      newPaginationSettings: newPaginationSettings,
      originalDataList: dataList,
      paginationStateDispatch: paginationStateDispatch
    }

    mainlyReducerDispatch(params);
  }

  return (
    <div className="search">
      <div className="searchInput">
        <div>名稱</div>
        <input type="text" placeholder="group name" ref={searchInputRef}></input>
      </div>
      <div className="searchSubmit">
        <button type="button" onClick={() => onSubmit()} onTouchStart={() => onSubmit()}>查詢</button>
      </div>
    </div>
  );
};