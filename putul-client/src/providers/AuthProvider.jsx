import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { app } from "../utils/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  // const aUser = {
  //   email: "rifat@gmail.com",
  //   displayName: "Rifat Khan",
  // };

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = (authObj, provider) => {
    setIsLoading(true);
    return signInWithPopup(authObj, provider);
  };

  const createUser = (authInfo, email, password) => {
    return createUserWithEmailAndPassword(authInfo, email, password);
  };

  const loginWithPassword = (authInfo, email, password) => {
    return signInWithEmailAndPassword(authInfo, email, password);
  };

  const logout = (authObj) => {
    setIsLoading(true);
    return signOut(authObj);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser(userInfo);
      }

      setIsLoading(false);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    isLoading,
    setUser,
    auth,
    googleProvider,
    login,
    createUser,
    loginWithPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProviders;
