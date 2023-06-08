import React from "react";
import "./App.css";
import Items from "./Components/Items";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./Components/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/items"
            element={
              <ProtectedRoute>
                <Items />
              </ProtectedRoute>
            }
          />
          <Route path="*" element="Not found" />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
