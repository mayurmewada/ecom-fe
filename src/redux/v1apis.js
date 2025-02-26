const api_base_url = import.meta.env.VITE_APP_BASE_URL;

// productSlice apis
export const getAllProductsApi = `${api_base_url}/products`
export const getFilteredProductsApi = `${api_base_url}/products/filter`
export const createProductsApi = `${api_base_url}/product/create`
export const importProductsApi = `${api_base_url}/product/import`

// filterSlice apis
export const getFiltersApi = `${api_base_url}/filters`

// searchSlice apis
export const getSearchApi = `${api_base_url}/search`

// homeSlice apis
export const getHomeDataApi = `${api_base_url}/home`