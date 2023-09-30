"use client"
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db, auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"; // Import Firebase Authentication functions

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [career, setCareer] = useState("");

  const postsCollectionRef = collection(db, "users"); // Change the collection name to "users"
  const router = useRouter();

  const signUp = async () => {
    try {
      // Create a user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update the user's display name
      await updateProfile(userCredential.user, {
        displayName: `${name} ${surname}`,
      });

      // Add user data to Firestore
      await addDoc(postsCollectionRef, {
        email,
        name,
        surname,
        career,
      });

      router.push("/dashboard"); // Redirect to the feed after successful signup
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <main className="flex w-screen h-screen  mt-10 flex-col items-center   text-black">
    <div className="bg-purple-200  text-center rounded-xl border-2 border-black  flex flex-col h-72 gap-4  ">
    <h1>Sign Up</h1>
    <div className="inputGroup text-xs font-sans   ">
        <div className="inputGp">
          <label>Email:</label>
          <input className="text-center border-2 border-black bg-white w-64 rounded-md  h-5 mt-2 "
         
            type="email"
            placeholder="Email..."
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="inputGp">
          <label>Password:</label>
          <input className="text-center border-2 border-black bg-white w-64 rounded-md  h-5 mt-2 "
         
            type="password"
            placeholder="Password..."
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="inputGp">
          <label>Name:</label>
          <input className="text-center border-2 border-black bg-white w-64 rounded-md  h-5 mt-2 "
         
            placeholder="Name..."
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="inputGp">
          <label>Surname:</label>
          <input className="text-center border-2 border-black bg-white w-64 rounded-md  h-5 mt-2 "
         
            placeholder="Surname..."
            onChange={(event) => setSurname(event.target.value)}
          />
        </div>
        <div className="inputGp">
          <label>Desired Career:</label>
          <input className="text-center border-2 border-black bg-white w-64 rounded-md  h-5 mt-2 "
         
            placeholder="Desired Career..."
            onChange={(event) => setCareer(event.target.value)}
          />
        </div>
        <button onClick={signUp}>Sign Up</button>
      </div>
      </div>
</main>
  );
}

export default SignUp;



