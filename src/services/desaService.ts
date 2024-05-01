import axios from "axios";
import { BASE_URL_API } from "../../env";

export const getDesa = async () => {
  console.log("desa service");
  const datas = await axios.get(`${BASE_URL_API}/data.php`);
  const res = datas.data;
  return res;
};
