import request from "@utils/request";
import { IProduct } from "src/interfaces/common";
const { VITE_API_HOST: HOST } = import.meta.env;

const getProducts = (): Promise<IProduct[]> => {
  return request({ url: `${HOST}/products` });
};

export default { getProducts };
