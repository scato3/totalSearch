export const formatPrice = (price: string | number): string => {
  const priceNumber = typeof price === "string" ? parseInt(price, 10) : price;

  return priceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
};
