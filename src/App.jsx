import Layout from "./components/Layout/Layout";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import Loader from "./components/Loader/Loader";
import TextFilter from "./components/TextFilter/TextFilter";
import Error from "./components/Error/Error";
import { useEffect } from "react";
import { fetchTasks } from "./redux/tasksops";
import { useDispatch, useSelector } from "react-redux";
import { selectloading } from "./redux/taskSlice";
import { selectError } from "./redux/taskSlice";
console.dir(fetchTasks);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const isLoading = useSelector(selectloading);
  const error = useSelector(selectError);
  return (
    <>
      <Layout>
        <h1>Hello</h1>
        {isLoading && <Loader>Loading message...</Loader>}

        <TaskForm />
        {error && <Error>Error message</Error>}
        <TextFilter />
        <TaskList />
      </Layout>
    </>
  );
}

export default App;
