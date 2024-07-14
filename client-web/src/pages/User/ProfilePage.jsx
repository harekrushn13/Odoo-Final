import React, { useState } from "react";

const ProfilePage = () => {
  // Dummy user data
  const initialUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    image: "https://via.placeholder.com/150",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save user data logic here
  };

  const handleCancelClick = () => {
    setUserData(initialUserData);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h2 className="text-3xl font-semibold mb-6 text-center text-[#27616e]">
        User Profile
      </h2>
      <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <div className="relative">
          <img
            src={selectedImage || userData.image}
            alt="User"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-5"
            />
          )}
        </div>
        <form className="space-y-4 w-full">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`mt-1 block w-full px-4 py-2 border ${
                isEditing ? "border-blue-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`mt-1 block w-full px-4 py-2 border ${
                isEditing ? "border-blue-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`mt-1 block w-full px-4 py-2 border ${
                isEditing ? "border-blue-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`mt-1 block w-full px-4 py-2 border ${
                isEditing ? "border-blue-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
          </div>
          {isEditing ? (
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleSaveClick}
                className="px-4 py-2 bg-[#27616e] text-white rounded-md shadow hover:bg-[#27616e]-600 transition duration-200"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="px-4 py-2 bg-gray-300 text-black rounded-md shadow hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleEditClick}
              className="px-4 py-2 bg-[#27616e] text-white rounded-md shadow hover:bg-[#27616e]-600 transition duration-200"
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
