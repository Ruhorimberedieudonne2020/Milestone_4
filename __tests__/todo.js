/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const todoList = require("../todo");
// eslint-disable-next-line no-unused-vars
const {
  all,
  add,
  markAsComplete,
  // eslint-disable-next-line no-unused-vars
  overdue,
  // eslint-disable-next-line no-unused-vars
  dueToday,
  // eslint-disable-next-line no-unused-vars
  dueLater,
  toDisplayableList,
} = todoList();

describe("testing our todo:", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  // test 1
  test("Should add new todo ", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(todoItemCount + 1);
  });
  // test 2
  test("Should mark todo  as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  // test 3
  test("retrieving today items", () => {
    expect(all.dueDate).toBe(all.dueToday);
  });
  // test 4
  test("retrieving overdue items.", () => {
    expect(all.overdue).toBe(all.dueDate);
  });
  test("retrieving due later items", () => {
    expect(all.dueLater).toBe(all.dueDate);
  });
});
