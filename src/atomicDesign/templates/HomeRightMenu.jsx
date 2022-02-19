import { Link } from "react-router-dom"
import { TodoAdd } from "../../components/TodoAdd"
import { ButtonPurple4 } from "../atoms/button/ButtonPurple4"

export const HomeRightMenu = ({ taskNameEl, listNameEl, setPriorityNum, setFlag, todoMemoEl, deadlineEl, setComplete, handleAddTodoListItem }) => {
    return (
        <>
            {/**入力エリア 画面右側に表示 */}
            <div class="w-full h-full bg-black1">
                {/* ここも追加関係、入力変数を増やしたらここも追加の必要あり */}
                < TodoAdd
                    taskNameEl={taskNameEl}
                    listNameEl={listNameEl}
                    setPriorityNum={setPriorityNum}
                    setFlag={setFlag}
                    todoMemoEl={todoMemoEl}
                    deadlineEl={deadlineEl}
                    setComplete={setComplete}
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
            </div >
        </>
    )
}

