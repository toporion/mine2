import axios from "axios";

export const fetchActiveOffer = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/offer/activeOffer/${userId}`);
    return response.data;
  } catch (error) {
    return { success: false, message: error.response?.data?.message || "Failed to fetch offer" };
  }
};
