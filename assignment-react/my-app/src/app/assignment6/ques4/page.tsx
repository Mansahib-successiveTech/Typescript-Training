"use client";

import { UserProfile } from "../../../components";


export default function Home() {
  return (
    <div>
      <p>
        4.Implement a UserProfile component that displays a users name, email,
        and phone number using props. Write tests using React Testing Library to
        ensure the component correctly renders the provided user data.
      </p>
      <UserProfile name={"mansahib"}  phone={987654876} email={"as@gmail.com"}/>
    </div>
  );
}
