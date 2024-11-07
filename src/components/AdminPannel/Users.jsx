
import { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="ml-2 p-1">
      <h1 className="text-2xl mb-4">User Management</h1>
      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex justify-between items-center bg-white p-4 shadow rounded">
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
            <div>
              <button className="text-red-500  p-2 rounded mr-2" onClick={() => deleteUser(user.id)}>Delete</button>
              <button className="text-green-500  p-2 rounded" onClick={() => editUser(user.id, { id: user.id, name: 'Updated Name', email: user.email })}>Edit</button>
            </div>
          </div>
        ))}
      </div>
      {/* Add form or modal for adding new users */}
    </div>
  );
};

export default Users;
