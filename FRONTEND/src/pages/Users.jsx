import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import NavbarAdmin from '../components/NavbarAdmin';

const Users = () => {
  const { users, addUser, updateUser, deleteUser } = useContext(UserContext);
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'client' });
  const [editingUser, setEditingUser] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(editingUser._id, form);
      setEditingUser(null);
    } else {
      addUser(form);
    }
    setForm({ username: '', email: '', password: '', role: 'client' });
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setForm({ ...user, password: '' });
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="container" style={{ marginTop: '70px' }}>
        <h1 className="mb-4">Usuarios</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="form-group mb-3">
            <label>Nombre de usuario</label>
            <input type="text" className="form-control" name="username" value={form.username} onChange={handleInputChange} placeholder="Nombre de usuario" required />
          </div>
          <div className="form-group mb-3">
            <label>Correo electrónico</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleInputChange} placeholder="Correo electrónico" required />
          </div>
          <div className="form-group mb-3">
            <label>Contraseña</label>
            <input type="password" className="form-control" name="password" value={form.password} onChange={handleInputChange} placeholder="Contraseña" required={!editingUser} />
          </div>
          <div className="form-group mb-3">
            <label>Rol</label>
            <select className="form-control" name="role" value={form.role} onChange={handleInputChange}>
              <option value="client">Cliente</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">{editingUser ? 'Actualizar' : 'Agregar'}</button>
        </form>
        <ul className="list-group">
          {users.map(user => (
            <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                {user.username} - {user.email} - {user.role}
              </div>
              <div>
                <button className="btn btn-secondary btn-sm me-2" onClick={() => handleEdit(user)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
