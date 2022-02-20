import { ChevronLeftIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import { TodoAdd } from "../../components/TodoAdd"
import { TodoEdit } from "../../components/TodoEdit"
import { ButtonPurple4 } from "../atoms/button/ButtonPurple4"

export const HomeRightMenu = ({
    taskNameEl,
    listNameEl,
    setPriorityNum,
    setFlag,
    todoMemoEl,
    deadlineEl,
    setComplete,
    handleAddTodoListItem,
    editModeFlag,
    setEditModeFlag,

    handleUpdateTodoListItem,
    editTargetTodo,

    editTaskNameEl,
    editListNameEl,
    setEditPriorityNum,
    setEditFlag,
    setEditComplete,
    editTodoMemoEl,
    editDeadlineEl
}) => {
    // console.log("editmode:", editModeFlag)
    const closeEditMenu = () => {
        // console.log("close!")
        setEditModeFlag(false);
    }
    if (editModeFlag) {
        return (
            <>
                {/**編集エリア 画面右側に表示 */}
                <div class="w-full h-full bg-black1">
                    <div class="text-white2">
                        <button onClick={closeEditMenu}>
                            <ChevronLeftIcon class="h-6 mt-2 ml-2" stroke="currentColor" />
                        </button>
                        < TodoEdit
                            editTaskNameEl={editTaskNameEl}
                            editListNameEl={editListNameEl}
                            setEditPriorityNum={setEditPriorityNum}
                            setEditFlag={setEditFlag}
                            editTodoMemoEl={editTodoMemoEl}
                            editDeadlineEl={editDeadlineEl}
                            setEditComplete={setEditComplete}
                            handleUpdateTodoListItem={handleUpdateTodoListItem}
                            editTargetTodo={editTargetTodo}
                        />
                        <br />
                        <Link to="/home/focus">
                            <ButtonPurple4 content="集中モード" />
                        </Link>
                        <br />
                    </div>
                </div>
            </>
        )
    } else {
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
                    <br />
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
}

