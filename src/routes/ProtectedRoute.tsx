import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useCurrentUser } from "../redux/Features/Auth/authSlice";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useSelector(useCurrentUser);

  const toastShownRef = useRef(false);

  useEffect(() => {
    if (!user && !toastShownRef.current) {
      toast.warning("Please login to continue.");
      toastShownRef.current = true;
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
