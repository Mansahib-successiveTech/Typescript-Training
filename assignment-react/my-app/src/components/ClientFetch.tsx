import { getUsers } from "../app/assignment-5/actions";


interface User {
  id: number;
  name: string;
  email: string;
}
export default async function Page() {
  const { data: users } = await getUsers();

  return (
    <div>
      <h1>Users List </h1>

      {users ? (
        <ul>
          {users.map((user:User) => (
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
