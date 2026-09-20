export const FILE_MOTION_MS = 650;
export const initialSelection = { active: null, pending: null, phase: "idle" };

export function projectSelection(state, action) {
  if (action.type === "select") {
    if (state.phase === "closing") return { ...state, pending: action.index };
    if (state.active === null) {
      return action.index === null ? state : { active: action.index, pending: null, phase: "opening" };
    }
    return { ...state, pending: action.index === state.active ? null : action.index, phase: "closing" };
  }
  if (action.type === "settled") {
    if (state.phase === "closing") {
      return state.pending === null ? initialSelection : { active: state.pending, pending: null, phase: "opening" };
    }
    if (state.phase === "opening") return { ...state, phase: "open" };
  }
  return state;
}
