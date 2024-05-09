// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { selectVisibleTasks } from "../../redux/taskSlice";
import css from "./TaskList.module.css";

export default function TaskList() {
  // const tasks = useSelector(selectTasks);
  // const textFilter = useSelector(selectTextFilters);
  // console.log(tasks);
  // const visibleTask = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(textFilter.toLowerCase())
  // );

  const tasks = useSelector(selectVisibleTasks);
  // console.log(tasks);
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
