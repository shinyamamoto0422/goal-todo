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
import { ButtonPurple4 } from "../../atomicDesign/atoms/button/ButtonPurple4";
import { Link } from "react-router-dom"
import { HomeRightMenu } from "../templates/HomeRightMenu"


export const HomePage = () => {
    const {
        todoList,
        toggleComplete,
        toggleFlag,
        togglePriority,
        addTodoListItem,
        deleteTodoListItem
    } = useTodo();

    // 入力変数を増やしたら、追加の必要あり
    // todoの追加、引数は taskName, listName, priorityNum, flag, deadline, complete, todoMemo
    const taskNameEl = useRef("");
    const listNameEl = useRef("");
    const [priorityNum, setPriorityNum] = useState("2")
    const [flag, setFlag] = useState(false)
    const deadlineEl = useRef("");
    const [complete, setComplete] = useState(false);
    const todoMemoEl = useRef("");
    const handleAddTodoListItem = () => {
        if (taskNameEl.current.value === "") return;
        addTodoListItem(taskNameEl.current.value,
            listNameEl.current.value,
            priorityNum,
            flag,
            deadlineEl.current.value,
            complete,
            todoMemoEl.current.value
        );
        taskNameEl.current.value = "";
        listNameEl.current.value = "";
        setPriorityNum("");
        setFlag(false);
        deadlineEl.current.value = "";
        todoMemoEl.current.value = "";
    };

    // todoリストのデータ(作成日でソート)
    const allList = todoList.filter(todo => todo).sort(function (a, b) { return (a.createdAt > b.createdAt ? 1 : -1) });
    const incompletedList = todoList.filter(todo => !todo.complete).sort(function (a, b) { return (a.createdAt > b.createdAt ? 1 : -1) });
    const completeList = todoList.filter(todo => todo.complete).sort(function (a, b) { return (a.createdAt > b.createdAt ? 1 : -1) });

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

                        <HomeRightMenu
                            taskNameEl={taskNameEl}
                            listNameEl={listNameEl}
                            setPriorityNum={setPriorityNum}
                            setFlag={setFlag}
                            setComplete={setComplete}
                            todoMemoEl={todoMemoEl}
                            deadlineEl={deadlineEl}
                            handleAddTodoListItem={handleAddTodoListItem}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}