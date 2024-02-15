"use client";
import { logout } from "@/actions/logout";

import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const handleLogout = () => {
    logout();
  }

  return (
    <div onClick={handleLogout} className="flex items-center w-full">
      <LogOut className="mr-2 h-4 w-4" />
      <p>Log out</p>
    </div>
  );
};

export default LogoutButton;
