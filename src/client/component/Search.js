// library
import React, { useContext, useRef } from 'react';

// toolkit
import { getFiveDaysForcast } from '../toolkit/toolkit';

// action
import { actionFilterList } from '../action/action';

// context
import { MainContext } from '../context/context';

// scss
import '../scss/search.scss';

export const Search = () => {
  const { defaultCity, mainlyReducerDispatch } = useContext(MainContext);
  const searchInputRef = useRef(null);

  const onSubmit = () => {
    searchInputRef.current.style.borderColor = '#cccccc';
    const tempSearchKeyword = searchInputRef.current.value.toLowerCase() || defaultCity;

    (async () => {
      try {
        const cityWithForecast = await getFiveDaysForcast(tempSearchKeyword);
        const params = {
          type: actionFilterList.SEARCH,
          cityWithForecast
        }

        mainlyReducerDispatch(params);
      } catch (error) {
        searchInputRef.current.style.borderColor = '#be184a';
        console.error("Your searching keywords might wrong...");
      }
    })()
  }

  return (
    <div className="search-wrap">
      <div className="search">
        <input type="text" placeholder="Search city name..." ref={searchInputRef}></input>
        <button type="button" onClick={() => onSubmit()} onTouchStart={() => onSubmit()}>Search</button>
      </div>
    </div>
  );
};