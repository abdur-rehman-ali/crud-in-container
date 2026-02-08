import { apiFetch } from "./apiFetch";


/**
 * Products API Service
 */
export const productsAPI = {
  /**
   * Get all products with pagination
   */
  list: ({ pageParam = 1 }: { pageParam?: number } = {}) => {
    const params = new URLSearchParams({ page: pageParam.toString() });

    return apiFetch(`/products/?${params.toString()}`);
  },

  /**
   * Get single product by ID
   */
  getProduct: (id: string) => apiFetch(`/products/${id}`),

  // /**
  //  * Create a new product
  //  */
  // createProduct: (data) => 
  //   apiFetch('/products', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //   }),

  // /**
  //  * Update existing product
  //  */
  // updateProduct: ({ id, ...data }) => 
  //   apiFetch(`/products/${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify(data),
  //   }),

  // /**
  //  * Delete product
  //  */
  // deleteProduct: (id) => 
  //   apiFetch(`/products/${id}`, {
  //     method: 'DELETE',
  //   }),
};