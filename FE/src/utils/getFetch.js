import { URL } from '../constants/url';

const getFetch = async ({ checkin, checkout, adults, children, infants, priceMin, priceMax }) => {
  const filteredUrl = await URL.PROD.API
    + ((checkin && checkout) ? `check_in=${checkin}&check_out=${checkout}&` : '')
    + ((adults || children || infants) ? `adults=${adults}&children=${children}&infants=${infants}&` : '')
    + ((priceMin && priceMax) ? `price_min=${priceMin}&price_max=${priceMax}` : '');

  console.log(filteredUrl);

  const initialData = await fetch(filteredUrl).then((response) => {
    return response.json();
  });

  return initialData
}

export default getFetch