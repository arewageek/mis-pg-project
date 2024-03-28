import { db } from "@/lib/firebase";
import { clerkClient } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";

export const accountValidator = async (userID) => {
  return false;
  const checked = false;
  if (checked) return null;

  const userRef = await getDocs(collection(db, userID));
  // if (userRef.length > 0) {
  //   //   localStorage.setItem("userChecked", true);
  //   // console.log(userRef);
  //   // return null;
  // }

  const retrieveUserInfo = await clerkClient.users.getUser(userID);

  // console.log(retrieveUserInfo);

  // const createProfile = addDoc(collection(db, userID), {
  //   name: "",
  //   email: "",
  // });
};
