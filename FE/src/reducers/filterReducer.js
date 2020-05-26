const initialValue = {
    checkin: "",
    checkout: "",
    staying: 1,
    adults: 0,
    children: 0,
    infants: 0,
    priceMin: 0,
    priceMax: 0,
    priceDistribution: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

export const filterReducer = (state = initialValue, action) => {
    const { type, data } = action;
    switch (type) {
        case "CONFIGURE_DATE":
            return {
                ...state,
                checkin: data.checkin,
                checkout: data.checkout,
                staying: getStaying(data.checkout, data.checkin)
            };
        case "CONFIGURE_GUEST":
            return {
                ...state,
                adults: data.adults,
                children: data.children,
                infants: data.infants,
            };
        case "CONFIGURE_PRICE":
            return {
                ...state,
                priceMin: data.priceMin,
                priceMax: data.priceMax
            };
        case "CONFIGURE_PRICE_DISTRIBUTION":
            return {
                ...state,
                priceDistribution: data.priceDistribution
            };
        default:
            return state;
    }
};

const getStaying = (checkin, checkout) => {
    return (new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)
}