import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isTokenAllowed } from '../../services/personalApi/auth/isTokenAllowed';

export default function ProtectedRoute() {
  const [token, setToken] = useState(localStorage.getItem('frajaToken'));
  const [isLoading, setIsLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (token) {
        const isMyTokenValid = await isTokenAllowed(token);
        setIsAllowed(isMyTokenValid);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [token]);

  if (isLoading) {
    // You can render a loading indicator here if needed.
    return null;
  }

  if (isAllowed) {
    return <Outlet />;
  }

  return <Navigate to='/' />;
}
