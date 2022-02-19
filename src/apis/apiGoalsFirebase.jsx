import { getAuth } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

// usergoalsのusersettingを取得


// 
export const addGoalData = async (id, usersetting) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid
    const goalsRef = collection(db, "goals");
    await setDoc(doc(goalsRef, uid, "usergoals", id), usersetting);
}