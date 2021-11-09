import { ActionInterface } from "models/interfaces";
import {
  TOGGLE_SIDEBAR,
  TOGGLE_DIALOG,
  TOGGLE_NOTIFICATION,
  LOADING_DONE,
  LOADING_STARTED,
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_SELECTED_ITEM,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "utils/constants/action-types";

const ActionTypes = {
  TOGGLE_SIDEBAR,
  TOGGLE_DIALOG,
  TOGGLE_NOTIFICATION,
  LOADING_DONE,
  LOADING_STARTED,
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_SELECTED_ITEM,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
};


const actionCreator = (type: string, payload: any | undefined | null): ActionInterface => ({ type, payload });
export { ActionTypes, actionCreator };
