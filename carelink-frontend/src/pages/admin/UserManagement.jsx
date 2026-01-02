import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  PlusIcon, 
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

// Mock Data
const MOCK_USERS = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    email: 'sarah.jenkins@chms.org',
    phone: '+1 (555) 123-4567',
    role: 'Chief Physician',
    department: 'General Practice',
    status: 'Active',
    lastLogin: '2 hours ago',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    dateJoined: '2020-03-15',
    address: '123 Medical Plaza, Suite 100'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    email: 'm.chen@chms.org',
    phone: '+1 (555) 234-5678',
    role: 'Head Nurse',
    department: 'Pediatrics',
    status: 'Active',
    lastLogin: 'Yesterday, 4:30 PM',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    dateJoined: '2019-07-22',
    address: '456 Healthcare Ave, Building B'
  },
  {
    id: 3,
    name: 'James Doe',
    email: 'james.doe@chms.org',
    phone: '+1 (555) 345-6789',
    role: 'IT Support',
    department: 'Administration',
    status: 'Offline',
    lastLogin: 'Oct 24, 2023',
    avatarUrl: 'https://i.pravatar.cc/150?img=33',
    dateJoined: '2021-01-10',
    address: '789 Tech Center, Floor 3'
  },
  {
    id: 4,
    name: 'Dr. Emily Blunt',
    email: 'emily.blunt@chms.org',
    phone: '+1 (555) 456-7890',
    role: 'Physician',
    department: 'General Practice',
    status: 'Disabled',
    lastLogin: 'Sep 12, 2023',
    avatarUrl: 'https://i.pravatar.cc/150?img=29',
    dateJoined: '2018-11-05',
    address: '321 Wellness Blvd, Suite 200'
  },
  {
    id: 5,
    name: 'Sarah Lee',
    email: 's.lee@chms.org',
    phone: '+1 (555) 567-8901',
    role: 'Coordinator',
    department: 'Community Outreach',
    status: 'Active',
    lastLogin: 'Today, 9:00 AM',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    dateJoined: '2022-05-18',
    address: '654 Community Center, Room 15'
  },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(MOCK_USERS);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSaveUser = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    handleCloseModal();
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
          <p className="text-slate-500">Manage access, roles, and account status for all healthcare providers.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm">
          <PlusIcon className="w-5 h-5" />
          Add New User
        </button>
      </div>

      {/* SEARCH SECTION */}
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search users by name, email, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      {/* USER TABLE */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">User Details</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Role & Dept</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Login</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {users.map((user) => (
                <UserTableRow key={user.id} user={user} onUserClick={handleUserClick} />
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="px-6 py-4 bg-white border-t border-slate-100 flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">5</span> results
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md border border-slate-200 text-slate-400 hover:bg-slate-50">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button className="px-3.5 py-2 text-sm font-medium rounded-md bg-blue-600 text-white">1</button>
            <button className="p-2 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      {isModalOpen && selectedUser && (
        <EditUserModal 
          user={selectedUser} 
          onClose={handleCloseModal}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
};

// User Table Row Component
const UserTableRow = ({ user, onUserClick }) => {
  const getStatusBadge = (status) => {
    const styles = {
      'Active': 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
      'Offline': 'bg-slate-50 text-slate-600 ring-slate-500/20',
      'Disabled': 'bg-red-50 text-red-700 ring-red-600/20'
    };
    const dotColors = {
      'Active': 'bg-emerald-500',
      'Offline': 'bg-slate-400',
      'Disabled': 'bg-red-500'
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ring-inset ${styles[status]}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${dotColors[status]}`}></span>
        {status}
      </span>
    );
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full object-cover border border-slate-200" src={user.avatarUrl} alt={user.name} />
          </div>
          <div className="ml-4">
            <button 
              onClick={() => onUserClick(user)}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline text-left"
            >
              {user.name}
            </button>
            <div className="text-sm text-slate-500">{user.email}</div>
          </div>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col items-start gap-1">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
            {user.role}
          </span>
          <div className="text-sm text-slate-500">{user.department}</div>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        {getStatusBadge(user.status)}
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
        {user.lastLogin}
      </td>
    </tr>
  );
};

// Edit User Modal Component
const EditUserModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <UserCircleIcon className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">Edit User Profile</h2>
              <p className="text-sm text-slate-500">Update user information and settings</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-4">
            <img 
              src={formData.avatarUrl} 
              alt={formData.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-slate-200"
            />
            <div>
              <h3 className="font-semibold text-slate-900">{formData.name}</h3>
              <p className="text-sm text-slate-500">User ID: #{formData.id}</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Chief Physician</option>
                <option>Physician</option>
                <option>Head Nurse</option>
                <option>Nurse</option>
                <option>IT Support</option>
                <option>Coordinator</option>
                <option>Administrator</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>General Practice</option>
                <option>Pediatrics</option>
                <option>Administration</option>
                <option>Community Outreach</option>
                <option>Emergency</option>
                <option>Surgery</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Active</option>
                <option>Offline</option>
                <option>Disabled</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date Joined</label>
              <input
                type="date"
                name="dateJoined"
                value={formData.dateJoined}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Avatar URL</label>
              <input
                type="text"
                name="avatarUrl"
                value={formData.avatarUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex gap-3 pt-4 border-t border-slate-200">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;