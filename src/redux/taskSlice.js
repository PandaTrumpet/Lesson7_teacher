import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./tasksops";
import { selectTextFilters } from "./filterSlice";
const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addTask.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (task) => task.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const selectTasks = (state) => state.tasks.items;
export const selectloading = (state) => state.tasks.loading;
export const selectError = (state) => state.tasks.error;

// Складний селектор, котрий повертає якесь обчислення
// export const selectNumberOfTasks = (state) => {
//   return state.tasks.items.length;
// };

// export const selectVisibleTasks = (state) => {
//   // const tasks = state.tasks.items;
//   const tasks = selectTasks(state);
//   // const textFilter = state.filters.text;
//   const textFilter = selectTextFilters(state);
//   return tasks.filter((task) =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };
export const selectVisibleTasks = createSelector(
  [(state) => state.tasks.items, (state) => state.filters.text],
  (tasks, textFilter) => {
    console.log("select");
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
export default slice.reducer;
