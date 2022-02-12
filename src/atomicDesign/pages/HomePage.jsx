import { useState, useEffect, useRef } from "react"
import { useTodo } from "../../hooks/useTodo"

import { users } from "../../libs/userModel"

// database import
import { db } from '../../firebase/firebase'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc
} from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
// finish database import

import { TodoTitle } from "../../components/TodoTitle"
import { TodoAdd } from "../../components/TodoAdd"
import { TodoList } from "../../components/TodoList"

import { SideBar } from "../templates/SideBar"
import { TopBar } from "../organisms/TopBar"

export const HomePage = () => {
    const {
        todoList,
        toggleComplete,
        toggleFlag,
        addTodoListItem,
        deleteTodoListItem
    } = useTodo();

    // 入力変数を増やしたら、追加の必要あり
    const taskNameEl = useRef("");
    const listNameEl = useRef("");
    const todoMemoEl = useRef("");
    const handleAddTodoListItem = () => {
        if (taskNameEl.current.value === "") return;
        addTodoListItem(taskNameEl.current.value, listNameEl.current.value, todoMemoEl.current.value);
        taskNameEl.current.value = "";
        listNameEl.current.value = "";
        todoMemoEl.current.value = "";
    };

    // todoリストのデータ
    const allList = todoList.filter(todo => todo);
    const incompletedList = todoList.filter(todo => !todo.complete);
    const completeList = todoList.filter(todo => todo.complete);

    // firebase
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);

    const [users, setUsers] = useState([]);
    const usersCollectionReference = collection(db, "users");
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionReference);
            // console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUsers();
    }, [])
    // addDocument in firestore when click button
    const createUser = async () => {
        // send information to firestore
        await addDoc(usersCollectionReference, { name: newName, age: Number(newAge) });
    }
    // identify document id & delete document in firestore when click button
    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 }
        await updateDoc(userDoc, newFields);
    }
    // delete document in firestore when click button
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }
    // finish firebase

    return (
        <div class="h-screen w-screen">
            <div class="bg-black2 flex h-full w-full">
                {/**サイドバー */}
                <SideBar />
                {/**サイドバー以外 */}
                <div class="h-full w-full">
                    {/**トップバー */}
                    <TopBar title={"Home"} />
                    <div class="flex h-full">
                        {/**まとめて画面左側に表示*/}
                        <div class="w-5/12 f-full">
                            {/**未完了エリア */}
                            <div class="">
                                <div class="flex ml-24">
                                    <TodoTitle title="未完了のタスク" as="h2" />
                                </div>
                                <div class="border border-1 border-white3 ml-24" />
                                <TodoList
                                    todos={incompletedList}
                                    deleteTodoListItem={deleteTodoListItem}
                                    toggleComplete={toggleComplete}
                                    toggleFlag={toggleFlag} />
                            </div>
                            {/**完了エリア */}
                            <div class="">
                                <div class="flex ml-24">
                                    <TodoTitle title="完了したタスク" as="h2" />
                                </div>

                                <div class="border border-1 border-white3 ml-24" />
                                <TodoList
                                    todos={completeList}
                                    deleteTodoListItem={deleteTodoListItem}
                                    toggleComplete={toggleComplete}
                                    toggleFlag={toggleFlag}
                                />
                            </div>
                        </div>
                        <div class="border border-1 border-white3" />

                        {/**入力エリア 画面右側に表示 */}
                        <div class="w-full h-full bg-black1">
                            <br />
                            <div class="flex ml-12">
                                <TodoTitle title="Todo進捗管理" as="h1" />
                            </div>
                            <br />
                            {/* ここも追加関係、入力変数を増やしたらここも追加の必要あり */}
                            <TodoAdd
                                taskNameEl={taskNameEl}
                                listNameEl={listNameEl}
                                todoMemoEl={todoMemoEl}
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
                                toggleComplete={toggleComplete}
                                toggleFlag={toggleFlag}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* firebase */}
            <input
                type="text"
                placeholder="Name..."
                onChange={(event) => { setNewName(event.target.value) }} />
            <input
                type="number"
                placeholder="Age..."
                onChange={(event) => { setNewAge(event.target.value) }} />
            <button onClick={createUser}>create user</button>
            {users.map((user) => {
                return (
                    <div key={uuidv4()}>
                        <h1>Name: {user.name}</h1>
                        <h1>Age: {user.age}</h1>
                        <button onClick={() => updateUser(user.id, user.age)}>increase age</button>
                        <br />
                        <button onClick={() => deleteUser(user.id)}>delete user</button>
                    </div>
                )
            })}
        </div>
    )
}