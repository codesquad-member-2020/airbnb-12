const initialValue = {
    checkin: "",
    checkout: "",
    adults: 0,
    children: 0,
    infants: 0,
    priceMin: 0,
    priceMax: 1000
};

export const filterReducer = (state = initialValue, action) => {
    const { type, data } = action;
    switch (type) {
        case "CONFIGURE_DATE":
            return {
                ...state,
                checkin: data.checkIn,
                checkout: data.checkOut
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
        default:
            return state;
    }
};
