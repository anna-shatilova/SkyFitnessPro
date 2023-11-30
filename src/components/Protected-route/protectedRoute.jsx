import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children, redirectPath = '/login' }) => {
  const userData = JSON.parse(localStorage.getItem('userSkyFitnesPro'))
  if (!userData) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}
