"use client";

import { redirect } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { Profile } from "../../components";


const Home = () => {
  const { loggedIn, login } = useAuth();
  return (
    <>
      {loggedIn ? (
        <>
          <div>
            <Profile />
          </div>
        </>
      ) : (
        redirect('/login')
      )}
    </>
  );
};
export default Home;
