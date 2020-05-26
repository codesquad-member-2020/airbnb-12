const initialValue = {
    checkin: "",
    checkout: "",
 feat/fe/issue-6
=======
    staying: 1,
 dev
    adults: 0,
    children: 0,
    infants: 0,
    priceMin: 0,
 feat/fe/issue-6
    priceMax: 1000
=======
    priceMax: 0,
    priceDistribution: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
>>>>>>> dev
};

export const filterReducer = (state = initialValue, action) => {
    const { type, data } = action;
    switch (type) {
        case "CONFIGURE_DATE":
            return {
                ...state,
<<<<<< feat/fe/issue-6
                checkin: data.checkIn,
                checkout: data.checkOut
=======
                checkin: data.checkin,
                checkout: data.checkout,
                staying: getStaying(data.checkout, data.checkin)
>>>>>> dev
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
<<<<<< feat/fe/issue-6
=======
        case "CONFIGURE_PRICE_DISTRIBUTION":
            return {
                ...state,
                priceDistribution: data.priceDistribution
            };
>>>>>> dev
        default:
            return state;
    }
};
<<<<<< feat/fe/issue-6
=======

const getStaying = (checkin, checkout) => {
    return (new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)
}
>>>>>> dev
