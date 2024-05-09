import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask } from "../../redux/tasksops";
export default function Task({ task }) {
  const dispatch = useDispatch();
  //   const deleteSubmit = (task) => {
  //     dispatch(deleteTask(task.id));
  //   };
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>
    </div>
  );
}
