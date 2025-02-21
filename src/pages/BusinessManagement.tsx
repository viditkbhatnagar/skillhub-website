import React from "react";
import { Link } from "react-router-dom";

function BusinessManagement() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Business Management Programs</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/business-management/level-3" className="text-blue-600 hover:underline">
            Level 3 Diploma in Business Management
          </Link>
        </li>
        <li>
          <Link to="/business-management/level-4" className="text-blue-600 hover:underline">
            Level 4 Diploma in Business Management
          </Link>
        </li>
        <li>
          <Link to="/business-management/level-5" className="text-blue-600 hover:underline">
            Level 5 Diploma in Business Management
          </Link>
        </li>
        <li>
          <Link to="/business-management/level-6-top-up" className="text-blue-600 hover:underline">
            Level 6 Top-Up in Business Management
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BusinessManagement;
