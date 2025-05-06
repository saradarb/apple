// src/helpers.jsx

export const storeUser = (data) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: data.user.username,
        jwt: data.jwt,
      })
    );
  };
  
  export const userData = () => {
    try {
      const stringifiedUser = localStorage.getItem("user");
      return stringifiedUser ? JSON.parse(stringifiedUser) : {};
    } catch (error) {
      console.error("Error parsing user data", error);
      return {};
    }
  };
  