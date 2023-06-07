// import { addressActionTypes } from "../utils/constants";
const addressActionTypes = {
    DISPLAY_ADDRESSES: "DISPLAY_ADDRESSES",
    SHOW_ADDRESS_MODAL: "SHOW_ADDRESS_MODAL",
    SET_ADDRESS_DETAILS: "SET_ADDRESS_DETAILS",
    EDIT_ADDRESS_DETAILS: "EDIT_ADDRESS_DETAILS",
    ADD_NEW_ADDRESS: "ADD_NEW_ADDRESS",
    SET_DUMMY_ADDRESS: "SET_DUMMY_ADDRESS",
    REMOVE_ADDRESS: "REMOVE_ADDRESS",
    RESET_ADDRESS_FORM: "RESET_ADDRESS_FORM",
    ZIPCODE_ERROR: "ZIPCOD_ERROR",
    MOBILE_ERROR: "MOBILE_ERROE",
    SET_SELECTED_ADDRESS_ID: "SET_SELECTED_ADDRESS_ID",
};

const {
    DISPLAY_ADDRESSES,
    SET_ADDRESS_DETAILS,
    EDIT_ADDRESS_DETAILS,
    ADD_NEW_ADDRESS,
    SET_DUMMY_ADDRESS,
    SHOW_ADDRESS_MODAL,
    REMOVE_ADDRESS,
    RESET_ADDRESS_FORM,
    ZIPCODE_ERROR,
    MOBILE_ERROR,
    SET_SELECTED_ADDRESS_ID,
} = addressActionTypes;

// const initialState = {
//     addresses: [
//         {
//             id: 0,
//             fullName: "Moksh Mahajan",
//             pincode: "182101",
//             addressLine: "W No. 8, H. No. 57",
//             landMark: "Near Pandav Mandir",
//             city: "Udhampur",
//             state: "Jammu & Kashmir",
//         },

//         {
//             id: 1,
//             fullName: "Aman Gupta",

//             pincode: "182101",
//             addressLine: "W No. 9, H. No. 36",
//             landMark: "Arya Samaj Gali",
//             city: "Udhampur",
//             state: "Jammu & Kashmir",
//         },
//     ],

//     selectedAddress: null,
// };

export const initialAddressInput = {
    _id: "",
    name: "Arpit",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    mobile: "",
};

export const initialAddressState = {
    addresses: [],
    showAddressModal: false,
    addressFormData: initialAddressInput,
    addressFormError: {
        zipcodeError: false,
        mobileError: false,
    },
    selectedAddressId: null,
};

const addressReducer = (state, { type, payload }) => {
    switch (type) {
        case DISPLAY_ADDRESSES:
            return {
                ...state,
                addresses: payload,
                selectedAddressId: payload ? payload[0]?._id : null,
            };
        case SHOW_ADDRESS_MODAL:
            return { ...state, showAddressModal: payload };
        case SET_ADDRESS_DETAILS:
            return {
                ...state,
                addressFormData: {
                    ...state.addressFormData,
                    [payload.name]: payload.value,
                },
            };
        case EDIT_ADDRESS_DETAILS:
            return { ...state, addressFormData: payload };
        case ADD_NEW_ADDRESS:
            return { ...state, addresses: payload };
        case SET_DUMMY_ADDRESS:
            return { ...state, addressFormData: payload };
        case REMOVE_ADDRESS:
            return { ...state, addresses: payload };
        case RESET_ADDRESS_FORM:
            return { ...state, addressFormData: payload };
        case ZIPCODE_ERROR:
            return {
                ...state,
                addressFormError: {
                    ...state.addressFormError,
                    zipcodeError: payload.zipcodeError,
                },
            };
        case MOBILE_ERROR:
            return {
                ...state,
                addressFormError: {
                    ...state.addressFormError,
                    mobileError: payload.mobileError,
                },
            };
        case SET_SELECTED_ADDRESS_ID:
            return { ...state, selectedAddressId: payload };
        default:
            return state;
    }
};

export default addressReducer;