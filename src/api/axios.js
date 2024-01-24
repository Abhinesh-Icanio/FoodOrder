import axios from "axios";

export const getCartList = async () => {
  try {
    const response = await axios.get(
      `https://recruitment-5b9b5-default-rtdb.firebaseio.com/meals.json`
    );
    return response;
  } catch (error) {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  }
};
