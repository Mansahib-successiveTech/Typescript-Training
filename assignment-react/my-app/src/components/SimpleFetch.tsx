
import { getUsers } from "../app/assignment-5/actions";

export default async function UsersPage() {
  const { data:users} = await getUsers();

  return (
    <div>
      <h1>Users List SSR with fetch via actions.js</h1>


      {Array.isArray(users) && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available</p>
      )}

    </div>
  );
}
