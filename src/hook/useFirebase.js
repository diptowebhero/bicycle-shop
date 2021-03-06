import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import firebaseInitialization from "../Pages/Login/Firebase/firebase.init";

firebaseInitialization();
const useFirebase = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [admin,setAdmin] = useState(false);
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //google sign in
  const sigInWithGoogle = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        savedUserInfo(user.email, user.displayName, "PUT");
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //login user
  const loginUserEmailAndPassword = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };
  //register new user
  const registerNewUser = (email, password, name, photo, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        const newUser = { email, displayName: name, photoURL: photo };
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        setUser(user, newUser);
        savedUserInfo(email, name, "POST");
        setError("");
        history.replace("/");
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //log out
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //saved user for admin
  const savedUserInfo = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://enigmatic-plateau-73097.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    fetch(`https://enigmatic-plateau-73097.herokuapp.com/users/${user.email}`)
    .then((response) => response.json())
    .then((data) => setAdmin(data.admin))
  },[user.email])

  return {
    admin,
    sigInWithGoogle,
    user,
    error,
    logOut,
    registerNewUser,
    loginUserEmailAndPassword,
    loading,
  };
};

export default useFirebase;
