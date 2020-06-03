import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import SearchResultList from '../SearchResultList'
import SearchResultTitle from '../SearchResultTitle'
import getFetch from '../../utils/getFetch'
import { getPriceDistribution } from '../../modules/price';

const SearchResult = () => {
  const dispatch = useDispatch();

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

  const { checkin, checkout, adults, children, infants, priceMin, priceMax } = useSelector(state => ({
    checkin: state.date.checkin,
    checkout: state.date.checkout,
    adults: state.guest.adults,
    children: state.guest.children,
    infants: state.guest.infants,
    priceMin: state.price.priceMin,
    priceMax: state.price.priceMax
  }));

  const fetchInitialData = async () => {
    const initialData = await getFetch({ checkin, checkout, adults, children, infants, priceMin, priceMax });
    setCount(initialData.data.totalCount);
    setItems(initialData.data.accommodations);

    const actionObj = getPriceDistribution(initialData.data.priceDistribution);
    dispatch(actionObj);
  };

  useEffect(() => {
    fetchInitialData();
  }, [checkin, checkout, adults, children, infants, priceMin, priceMax]);

  return (
    <div>
      <SearchResultTitle count={count} />
      <SearchResultList items={items} />
    </div>
  )
}

export default SearchResult
