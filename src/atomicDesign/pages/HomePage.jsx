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
    const deadlineEl = useRef("");
    const handleAddTodoListItem = () => {
        if (taskNameEl.current.value === "") return;
        addTodoListItem(taskNameEl.current.value,
            listNameEl.current.value,
            todoMemoEl.current.value,
            deadlineEl.current.value);
        taskNameEl.current.value = "";
        listNameEl.current.value = "";
        todoMemoEl.current.value = "";
        deadlineEl.current.value = "";
    };

    // todoリストのデータ(作成日でソート)
    const allList = todoList.filter(todo => todo).sort(function (a, b) { return (a.createdAt > b.createdAt ? 1 : -1) });
    const incompletedList = todoList.filter(todo => !todo.complete).sort(function (a, b) { return (a.createdAt > b.createdAt ? 1 : -1) });
    const completeList = todoList.filter(todo => todo.complete).sort(function (a, b) { return (a.createdAt > b.createdAt ? 1 : -1) });
    // リストの振り分けをして下で、mapで回して表示する

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
                            {/* ここも追加関係、入力変数を増やしたらここも追加の必要あり */}
                            <TodoAdd
                                taskNameEl={taskNameEl}
                                listNameEl={listNameEl}
                                todoMemoEl={todoMemoEl}
                                deadlineEl={deadlineEl}
                                handleAddTodoListItem={handleAddTodoListItem}
                            />
                            <Link to="/home/focus">
                                <ButtonPurple4 content="集中モード" />
                            </Link>
                            <br />
                            {/*
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
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}