import { useState, useEffect, useRef } from "react"
import { useTodo } from "../hooks/useTodo"
import db from "../firebase/firebase"
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { TodoTitle } from "./TodoTitle"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { FlagMarkType1 } from "../atomicDesign/atoms/flagMark/FlagMarkType1"

import { Home } from "../atomicDesign/molecules/iconWithText/Home"
import { Mylist } from "../atomicDesign/molecules/iconWithText/Mylist"
import { Goal } from "../atomicDesign/molecules/iconWithText/Goal"
import { Stats } from "../atomicDesign/molecules/iconWithText/Stats"
import { Account } from "../atomicDesign/molecules/iconWithText/Account"
import { NameTag } from "../atomicDesign/atoms/nameTag/NameTag"
import { TextSize2xl } from "../atomicDesign/atoms/text/TextSize2xl"
import { PriorityHigh } from "../atomicDesign/atoms/priority/PriorityHigh"
import { NameTagWithAt } from "../atomicDesign/atoms/nameTag/NameTagWithAt"

export default function App() {
  const {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem
  } = useTodo();

  const [todosData, setTodosData] = useState([]);
  useEffect(() => {
    // データベースからデータを取得する
    const todosData = collection(db, "todosData");
    console.log(todosData);
    // snapshotを取得する
    getDocs(todosData).then((snapshot) => {
      // console.log(snapshot.docs.map((doc) => ({...doc.data()})));
      setTodosData(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    // リアルタイムでデータを取得する
    onSnapshot((todosData), (todoData) => {
      setTodosData(todoData.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  const inputEl = useRef(null);
  const tagEl = useRef(null);
  const handleAddTodoListItem = () => {
    // ここも
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value, tagEl.current.value);
    inputEl.current.value = "";
  }

  const allList = todoList.filter(todo => todo);
  const incompletedList = todoList.filter(todo => !todo.done);
  const completeList = todoList.filter(todo => todo.done);

  return (
    <>
      <div class="flex leading-10 w-56 h-8">
        <PriorityHigh />
        <FlagMarkType1>フラグ</FlagMarkType1>
      </div>
      <NameTag taskName={"タスク名"} />
      <br />
      <TodoTitle title="Todo進捗管理" as="h1" />
      {/* ここも追加関係 */}
      <TodoAdd
        inputEl={inputEl}
        tagEl={tagEl}
        handleAddTodoListItem={handleAddTodoListItem} />
      <TodoTitle title={"すべて"} as="h2" />
      <TodoList
        todos={allList}
        deleteTodoListItem={deleteTodoListItem}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
      />
      <TodoTitle title="未完了" as="h2" />
      <TodoList
        todos={incompletedList}
        deleteTodoListItem={deleteTodoListItem}
        toggleTodoListItemStatus={toggleTodoListItemStatus} />
      <TodoTitle title="完了" as="h2" />
      <TodoList
        todos={completeList}
        deleteTodoListItem={deleteTodoListItem}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
      />
      {todosData.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.memo}</p>
          </div>
        )
      })}
      <TextSize2xl/>
      <Home />
      <Mylist />
      <Goal />
      <Stats />
      <Account />
    </>
  )
}