import { Fetcher } from "@/_lib/fetcher";

export const BunJang = async ({ value, num }: { value: string; num: number }) => {
  const apiUrl = `/api/1/find_v2.json?q=${value}&/order=date&page=${num}&request_id=2023620203531&stat_device=w&n=100&stat_category_required=1&req_ref=search&version=4`;

  try {
    const data = await Fetcher({ apiUrl, method: "GET" });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const Junggo = async ({ value, num }: { value: string; num: number }) => {
  const apiUrl = `https://search-api.joongna.com/v3/category/search`;

  const postData = {
    categoryFilter: [{ categoryDepth: 0, categorySeq: 0 }],
    firstQuantity: 100,
    jnPayYn: "ALL",
    keywordSource: "INPUT_KEYWORD",
    osType: 2,
    page: num,
    parcelFeeYn: "ALL",
    priceFilter: { maxPrice: 2000000000, minPrice: 0 },
    maxPrice: 2000000000,
    minPrice: 0,
    productFilterType: "ALL",
    quantity: 80,
    registPeriod: "ALL",
    saleYn: "SALE_N",
    searchWord: value as string,
    sort: "RECENT_SORT",
  };

  try {
    const data = await Fetcher({ apiUrl, method: "POST", body: postData });
    return data;
  } catch (error) {
    console.error(error);
  }
};
