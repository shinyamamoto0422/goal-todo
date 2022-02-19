import { getAuth } from "firebase/auth";
import { collection, getDocs, setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getAllGoalData = async () => {
    const allgoals = [];
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    const goalsRef = collection(db, "goals", uid, "usergoals");
    const response = await getDocs(goalsRef);
    // リストにまとめてからreturn
    response.forEach((doc) => {
        //console.log(doc.data())
        allgoals.push(doc.data())
    })
    return allgoals;
};

export const updateGoalData = async (id, goal) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid
    const goalsRef = collection(db, "goals");
    await updateDoc(doc(goalsRef, uid, "usergoals", id), goal);
}