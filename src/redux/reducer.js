import {
  addToDo,
  deleteTodo,
  setCurrentToDo,
  setFilter,
  updateToDo,
} from "./action";

export const toDoReducer = (
  state = { items: [], currentToDo: null },
  action
) => {
  switch (action.type) {
    case addToDo.type:
      return { ...state, items: [...state.items, action.payload] };
    case deleteTodo.type:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    case setCurrentToDo.type:
      return {
        ...state,
        currentToDo: action.payload,
      };
    case updateToDo.type:
      return {
        items: state.items.map((item) =>
          item.id === state.currentToDo.id
            ? { ...state.currentToDo, text: action.payload }
            : item
        ),
        currentToDo: null,
      };
    default:
      return state;
  }
};

export const filterReducer = (state = "", action) => {
  switch (action.type) {
    case setFilter.type:
      return action.payload;
    default:
      return state;
  }
};
