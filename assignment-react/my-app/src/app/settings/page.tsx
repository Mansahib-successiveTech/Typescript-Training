"use client";

import { redirect } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Setting from "../../components/Settings";


const Home = () => {
  const { loggedIn, login } = useAuth();
  return (
    <>
      {loggedIn ? (
        <>
          <div>
            <Setting />
          </div>
        </>
      ) : (
        redirect('/login')
      )}
    </>
  );
};
export default Home;
