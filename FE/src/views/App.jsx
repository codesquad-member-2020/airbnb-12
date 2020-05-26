import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { configurePriceDistribution } from '../actions/filterAction';
import FilterButtons from './FilterButtons';
import SearchResultList from './SearchResultList';
import SearchResultTitle from './SearchResultTitle';
import { URL } from '../constants/url';

const App = () => {
  // const dispatch = useDispatch();
  // const { checkin, checkout, adults, children, infants, priceMin, priceMax } = useSelector(state => state);
  const state = useSelector(state => state);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([{
    accommodationId: 0,
    thumbnailImages: [""],
    superHost: false,
    grade: 0,
    title: "",
    maximumAccommodates: 0,
    originalPrice: 0,
    finalPrice: 0,
    location: ""
  }]);

  // const fetchJSON = (url) => {
  //   const filteredUrl = url
  //     + ((checkin && checkout) ? `checkin=${checkin}&checkout=${checkout}&` : '')
  //     + ((adults + children + infants) ? `adults=${adults}&children=${children}&infants=${infants}&` : '')
  //     + `price-min=${priceMin}&price-max=${priceMax}`;
  //   console.log(filteredUrl);
  //   return fetch(url).then((response) => {
  //     return response.json();
  //   });
  // };

  const fetchJSON = (url) => {
    const filteredUrl = url
      + ((state.checkin && state.checkout) ? `checkin=${state.checkin}&checkout=${state.checkout}&` : '')
      + ((state.adults + state.children + state.infants) ? `adults=${state.adults}&children=${state.children}&infants=${state.infants}&` : '')
      + ((state.priceMin + state.priceMax) ? `price-min=${state.priceMin}&price-max=${state.priceMax}` : '');
    console.log(filteredUrl);
    return fetch(url).then((response) => {
      return response.json();
    });
  };

  const fetchInitialData = async () => {
    const initialData = await fetchJSON(URL.MOCK.ALL);
    setCount(initialData.data.totalCount);
    setItems(initialData.data.accommodations);

    // const actionObj = configurePriceDistribution({ priceDistribution: initialData.data.priceDistribution });
    // dispatch(actionObj);
  };

  useEffect(() => {
    fetchInitialData();
    // }, [checkin, checkout, adults, children, infants, priceMin, priceMax]);
  }, [state]);

  return (
    <div>
      <FilterButtons />
      <SearchResultTitle count={count} />
      <SearchResultList items={items} />
    </div>
  );
};

// const fetchJSON = (url, state) => {
//   const filteredUrl = url
//     + ((state.checkin && state.checkout) ? `checkin=${state.checkin}&checkout=${state.checkout}&` : '')
//     + ((state.adults + state.children + state.infants) ? `adults=${state.adults}&children=${state.children}&infants=${state.infants}&` : '')
//     + `price-min=${state.priceMin}&price-max=${state.priceMax}`;
//   console.log(filteredUrl);
//   return fetch(url).then((response) => {
//     return response.json();
//   });
// };


export default App;
