import createDataContext from "./createDataContext";
import api from "../api/api";

const workerReducere = (state, action) => {
  switch (action.type) {
    case "get_worker":
      return { ...state, worker: action.payload };
    case "add_error":
    case "get_workers":
      return { ...state, workers: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "grade_worker":
      return {...state,worker:action.payload};
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

const getworkers = (dispatch) => async () => {
  try {
    const response = await api.get(`workers`);
    dispatch({ type: "get_workers", payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with get worker",
    });
  }
};

const gradeworker =
  (dispatch) =>
  async (
    id,
    { communicationLevel, teamWorkLevel, implicationLevel, serviceQualityLevel }
  ) => {
    try {
      const response = await api.post(`workers/${id}/grade`, {
        communicationLevel,
        teamWorkLevel,
        implicationLevel,
        serviceQualityLevel,
      });
      dispatch({ type: "grade_worker", payload: response.data });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with get worker",
      });
    }
  };

  const updategrade =
  (dispatch) =>
  async (
    id,
    { communicationLevel, teamWorkLevel, implicationLevel, serviceQualityLevel },gradeId
  ) => {
    try {
      const response = await api.put(`workers/${id}/grade/${gradeId}`, {
        communicationLevel,
        teamWorkLevel,
        implicationLevel,
        serviceQualityLevel,
      });
      dispatch({ type: "grade_worker", payload: response.data });
      
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with get worker",
      });
    }
  };

  const deletegrade =
  (dispatch) =>
  async (
    id,gradeId
  ) => {
    try {
      const response = await api.delete(`workers/${id}/grade/${gradeId}`);
      dispatch({ type: "grade_worker", payload: response.data });
      
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
  { getworker, getworkers, gradeworker,updategrade,deletegrade },
  { worker: null, errorMessage: "", workers: null }
);
