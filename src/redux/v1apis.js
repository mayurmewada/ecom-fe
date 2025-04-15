const api_base_url = import.meta.env.VITE_APP_BASE_URL;

// productSlice apis
export const getAllProductsApi = `${api_base_url}/products`;
export const getFilteredProductsApi = `${api_base_url}/products/filter`;
export const createProductsApi = `${api_base_url}/product/create`;
export const importProductsApi = `${api_base_url}/product/import`;
export const getProductDetailApi = `${api_base_url}/product`;

// filterSlice apis
export const getFiltersApi = `${api_base_url}/filters`;

// searchSlice apis
export const getSearchApi = `${api_base_url}/search`;

// homeSlice apis
export const getHomeDataApi = `${api_base_url}/home`;

// authSLice apis
export const loginApi = `${api_base_url}/login`;
export const signupApi = `${api_base_url}/signup`;

// userSlice apis
export const getUserDetailsApi = `${api_base_url}/getuserdetails`;

// cartSlice apis
export const addToCartApi = `${api_base_url}/addtocart`;
export const cartLengthApi = `${api_base_url}/cartitems`;
export const cartDetailsApi = `${api_base_url}/cartdetails`;
export const createOrderApi = `${api_base_url}/create-order`;