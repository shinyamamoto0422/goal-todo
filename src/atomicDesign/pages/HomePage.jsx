import { useState, useEffect, useRef } from "react"
import { useTodo } from "../../hooks/useTodo"

import db from "../../firebase/firebase"
import { collection, getDocs, onSnapshot } from "firebase/firestore"

import { TodoTitle } from "../../components/TodoTitle"
import { TodoAdd } from "../../components/TodoAdd"
import { TodoList } from "../../components/TodoList"

import { SideBar } from "../templates/SideBar"


export const HomePage = () => {
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
        //console.log(todosData);
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
        if (inputEl.current.value === "") return;
        addTodoListItem(inputEl.current.value, tagEl.current.value);
        inputEl.current.value = "";
        tagEl.current.value = "";
    };

    // todoリストのデータ
    const allList = todoList.filter(todo => todo);
    const incompletedList = todoList.filter(todo => !todo.complete);
    const completeList = todoList.filter(todo => todo.complete);

    return (
        <>
            <div class="bg-black2 flex h-screen">
                {/**サイドバー */}
                <SideBar />

                {/**サイドバー以外 */}
                <div class="h-full">
                    {/**トップバー */}
                    <div class="">
                        <p class="text-white1 h-12 ml-24 mt-2 w-screen text-3xl">ホーム</p>
                        <div class="border border-1 border-white3" />
                    </div>

                    <div class="flex w-screen h-full">
                        {/**まとめて画面左側に表示*/}
                        <div class="w-5/12">
                            {/**未完了エリア */}
                            <br />
                            <div class="">
                                <div class="flex ml-24">
                                    <TodoTitle title="未完了のタスク" as="h2" />
                                </div>
                                <div class="border border-1 border-white3 ml-24" />
                                <TodoList
                                    todos={incompletedList}
                                    deleteTodoListItem={deleteTodoListItem}
                                    toggleTodoListItemStatus={toggleTodoListItemStatus} />
                            </div>

                            {/**完了エリア */}
                            <br />
                            <div class="">
                                <div class="flex ml-24">
                                    <TodoTitle title="完了したタスク" as="h2" />
                                </div>
                                <div class="border border-1 border-white3 ml-24" />
                                <TodoList
                                    todos={completeList}
                                    deleteTodoListItem={deleteTodoListItem}
                                    toggleTodoListItemStatus={toggleTodoListItemStatus}
                                />
                                {todosData.map((todo) => {
                                    return (
                                        <div key={todo.id}>
                                            <h1>{todo.taskName}</h1>
                                            <p>{todo.memo}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div class="border border-1 border-white3" />

                        {/**入力エリア 画面右側に表示 */}
                        <div class="w-7/12 h-full bg-black1">
                            <br />
                            <div class="flex ml-12">
                                <TodoTitle title="Todo進捗管理" as="h1" />
                            </div>
                            <br />
                            {/* ここも追加関係 */}
                            <TodoAdd
                                inputEl={inputEl}
                                tagEl={tagEl}
                                handleAddTodoListItem={handleAddTodoListItem}
                            />
                            <br />

                            <div class="flex ml-24">
                                <TodoTitle title={"すべてのタスク"} as="h2" />
                            </div>
                            <div class="border border-1 border-white3 ml-24" />
                            <TodoList
                                todos={allList}
                                deleteTodoListItem={deleteTodoListItem}
                                toggleTodoListItemStatus={toggleTodoListItemStatus}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}