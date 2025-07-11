import { ChildAuth } from "../../../components";

export default function Home() {
    return (
      <div>
        <p>
        1.create two components: a parent component that acts as a provider and a child component that consumes the context.
Create a context to manage a users authentication status logged in or out.
Implement a login button in the child component that, when clicked, updates the authentication status in the context to logged in
Display a message in the child component based on the users authentication status. If the user is logged in, show Welcome, username! Otherwise, display Please log in
        </p>
        <ChildAuth />
     </div>
    );
  }
  