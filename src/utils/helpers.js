export function getShopinfo(pathname) {
  console.log('pathname :>> ', pathname);
  if (pathname.includes("fakestore")) {
    console.log("first");
    return {
      storeAPI: "https://fakestoreapi.com/products",
      shopName: "Fakestore",
      relativeURL: '/fakestore'
    }
  }
  if (pathname.includes("escuelajs")) {
    console.log("second");
    return {
      storeAPI: "https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=1000&offset=10&limit=10",
      shopName: "Escuelajs",
      relativeURL: '/escuelajs'
    }
  }
}