import React from "react";

const Settings = ({ isDarkTheme, toggleTheme }) => {
  return (
    <main className="container">
      <h1 className="text-center pt-4">Settings</h1>
      <div>
        <h2 className="pb-4">Themes</h2>
        <button className="btn btn-dark" onClick={toggleTheme}>
        <i class="bi bi-moon-stars"></i> Toggle Dark Mode
        </button>
      </div>
    </main>
  );
};

export default Settings;
