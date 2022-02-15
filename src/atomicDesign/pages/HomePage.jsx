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
    deleteDoc,
    setDoc
} from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
// finish database import

import { TodoTitle } from "../../components/TodoTitle"
import { TodoAdd } from "../../components/TodoAdd"
import { TodoList } from "../../components/TodoList"
import { SideBar } from "../templates/SideBar"
//import { TopBar } from "../organisms/TopBar"
import { getAuth } from "firebase/auth"
import { TopBarText } from "../organisms/TopBarText"
import { TopBarBorder } from "../../common/TopBarBorder"


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
    /*
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
    */
    // firebaseテスト (todoList)
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    const [newTodo, setNewTodo] = useState("");

    const [todos, setTodos] = useState([]);
    const todosReference = collection(db, "todos");
    useEffect(() => {
        const getTodo = async () => {
            const data = await getDocs(todosReference);
            // console.log("data:", data);
            setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getTodo();
    }, [])
    // addDocument in firestore when click button
    const createTodo = async () => {
        // send information to firestore
        await setDoc(collection(db, "todos", "usertodos", "todo"), { todo: newTodo });
    }
    // identify document id & delete document in firestore when click button
    const updateTodo = async (id, age) => {
        const userDoc = doc(db, "todos", id);
        const newFields = { age: age + 1 }
        await updateDoc(userDoc, newFields);
    }
    // delete document in firestore when click button
    const deleteTodo = async (id) => {
        const userDoc = doc(db, "todos", id);
        await deleteDoc(userDoc);
    }
    // firebaseテスト finish

    return (
        <div class="h-screen w-screen">
            <div class="bg-black2 flex h-full w-full">
                {/**サイドバー */}
                <SideBar />
                {/**サイドバー以外 */}
                <div class="h-full w-full">
                    {/**トップバー */}
                    <TopBarText title={"Home"} />
                    <TopBarBorder />
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
                placeholder="Todo..."
                onChange={(event) => { setNewTodo(event.target.value) }} />
            <button onClick={createTodo}>create todo</button>
            {todos.map((todos) => {
                return (
                    <div key={uuidv4()}>
                        <br />
                        <h1>Name: {todos.todo}</h1>
                        <br />
                        <button onClick={() => updateTodo(todos.id, todos.age)}>increase age</button>
                        <br />
                        <button onClick={() => deleteTodo(todos.id)}>delete todo</button>
                    </div>
                )
            })}
        </div>
    )
}