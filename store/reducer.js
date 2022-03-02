let currentId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "toDoAdded":
      return [
        ...state,
        {
          title: action.payload.title,
          description: action.payload.description,
          isComplete: false,
          id: ++currentId,
        },
      ];
    case "toDosCleared":
      return [];
    default:
      return state;
  }
}
