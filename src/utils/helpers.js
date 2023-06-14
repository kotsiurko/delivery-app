export function getShopinfo(pathname) {
  if (pathname.toLowerCase().includes("fakestore")) {
    return {
      storeAPI: "https://fakestoreapi.com/products",
      shopName: "Fakestore",
      relativeURL: '/fakestore'
    }
  }
  if (pathname.toLowerCase().includes("escuelajs")) {
    return {
      storeAPI: "https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=1000&offset=10&limit=10",
      shopName: "Escuelajs",
      relativeURL: '/escuelajs'
    }
  }
}