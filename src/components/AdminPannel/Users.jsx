
import { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com' }, 
      { id: 4, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 5, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 6, name: 'Jane Smith', email: 'jane@example.com' },
  ]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedDetails, setEditedDetails] = useState({});

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const startEditing = (user) => {
    setEditingUserId(user.id);
    setEditedDetails({ ...user });
  };

  const saveUser = () => {
    setUsers(users.map(user => (user.id === editingUserId ? editedDetails : user)));
    setEditingUserId(null);
  };

  return (
    <div className="mr-1  p-6">
      <div className="mb-6">
        
        <p className="text-green-600 font-poppins font-bold">Total Users: {users.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 p-2 text-left">ID</th>
              <th className="border border-gray-200 p-2 text-left">Name</th>
              <th className="border border-gray-200 p-2 text-left">Email</th>
              <th className="border border-gray-200 p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-200">
                {editingUserId === user.id ? (
                  <>
                    <td className="border border-gray-200 p-2">{user.id}</td>
                    <td className="border border-gray-200 p-2">
                      <input
                        type="text"
                        value={editedDetails.name}
                        onChange={(e) => setEditedDetails({ ...editedDetails, name: e.target.value })}
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="border border-gray-200 p-2">
                      <input
                        type="email"
                        value={editedDetails.email}
                        onChange={(e) => setEditedDetails({ ...editedDetails, email: e.target.value })}
                        className="w-full border p-2 rounded"
                      />
                    </td>
                    <td className="border border-gray-200 p-2">
                      <button
                        className=" text-green-400 px-3 py-1 rounded mr-2"
                        onClick={saveUser}
                      >
                        Save
                      </button>
                      <button
                        className="text-red-400 px-3 py-1 rounded"
                        onClick={() => setEditingUserId(null)}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-gray-200 p-2">{user.id}</td>
                    <td className="border border-gray-200 p-2">{user.name}</td>
                    <td className="border border-gray-200 p-2">{user.email}</td>
                    <td className="border border-gray-200 p-2">
                      <button
                        className=" text-green-400 px-3 py-1 rounded mr-2"
                        onClick={() => startEditing(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-400  px-3 py-1 rounded"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
