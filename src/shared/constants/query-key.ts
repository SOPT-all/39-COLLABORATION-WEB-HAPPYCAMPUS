export const QUERY_KEY = {
  cart: {
    all: ['cart'] as const,
    list: (params: object) => [...QUERY_KEY.cart.all, 'list', params] as const,
  },
  folders: {
    all: ['folders'] as const,
  },
  material: {
    all: ['material'] as const,
    detail: (postId: number) => [...QUERY_KEY.material.all, postId] as const,
  },
};
