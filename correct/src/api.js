const API_URL = "http://localhost:5000/users";

export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const registerUser = async (userData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}?email=${email}&password=${password}`);
  const data = await response.json();
  return data.length ? data[0] : null;
};
