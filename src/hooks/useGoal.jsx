import * as goalFirebaseData from "../apis/apiGoalsFirebase";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";

export const useGoal = () => {
  const [goalList, setGoalList] = useState([]);

  useEffect(() => {
    goalFirebaseData.getAllGoalData().then(firebaseGoal => {
      setGoalList(firebaseGoal);
      console.log(firebaseGoal);
    })
  }, []);

  // 目標を更新する関数
  const updateGoal = (id, goal) => {
    const newGoalList = [];
    // 四つの中から、更新したい目標を探す
    const goalItem = goalList.find(item => item.id === id);
    // usersettingだけを上書きする
    const newGoalItem = { ...goalItem, usersetting: goal, updatedAt: Timestamp.now() };
    goalFirebaseData.updateGoalData(id, newGoalItem);
    goalList.map((goal) => {
      if (goal.id !== newGoalItem.id) {
        newGoalList.push(goal);
      } else {
        newGoalList.push(newGoalItem)
      }
    })
    setGoalList(newGoalList);
  };

  return {
    goalList,
    updateGoal,
  }
}