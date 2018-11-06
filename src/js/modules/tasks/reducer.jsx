const initialState = {
  tasks : [
    {text: 'life is good', completed: false},
    {text: 'life is great', completed: true},
    {text: 'life with snowboard', completed: false},
  ]
};

const TASK_TOGGLE = 'TASK_TOGGLE';

export const toggle = (index) => ({ type: TASK_TOGGLE, index });

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_TOGGLE:

      return {
        ...state, //copy object
        tasks: state.tasks.map((task, i) => ({
          ...task,
          completed: i === action.index ? ! task.completed : task.completed,
        })
      )};

    default:
      return state;
  }
}

//how to debug:
// const state = initialState;
// console.log(state);
// const newState = reducer(state, toggle(1));
// console.log(newState);
