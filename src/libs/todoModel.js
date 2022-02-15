export const todoModel = ({
    complete,
    deadline,
    flag,
    id,
    listName,
    priorityNum,
    taskName,
    todoMemo,
    created_at,
    updated_at,
    deleted_at,
    uid
}) => {
    return {
        complete: complete,
        deadline: deadline,
        flag: flag,
        id: id,
        listName: listName,
        priorityNum: priorityNum,
        taskName: taskName,
        todoMemo: todoMemo,
        created_at: created_at,
        updated_at: updated_at,
        deleted_at: deleted_at,
        uid: uid,
    };
}