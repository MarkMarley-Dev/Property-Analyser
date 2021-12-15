import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Account.scss";
import { auth, db, logout } from "../../firebase";

function Account() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      // const data = await query.docs[0].data();
      // setName(data.name);
      // console.log(data);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="content">
      <h1 className="content__title">account</h1>
      <p className="content__copy">Welcome {name}</p>
      <p className="content__copy">User email: {user?.email}</p>
      <button className="button" onClick={logout}>
        logout
      </button>
    </div>
  );
}
export default Account;
