import createDataContext from "./createDataContext";
import api from "../api/api";

const workerReducere = (state, action) => {
  switch (action.type) {
    case "get_worker":
      return { ...state, worker: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const getworker = (dispatch) => async (id) => {
  try {
    const response = await api.get(`workers/user/${id}`);
    dispatch({ type: "get_worker", payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with get worker",
    });
  }
};

export const { Provider, Context } = createDataContext(
  workerReducere,
  { getworker },
  { worker: null, errorMessage: "" }
);
