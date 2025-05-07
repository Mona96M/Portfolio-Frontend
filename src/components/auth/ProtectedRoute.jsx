import { Navigate } from 'react-router'


// i used the ProtectedRoute component to protect pages so only logged-in users can access them.
//i google it (how can i protect user page)
//https://medium.com/ >> https://www.robinwieruch.de/react-router-private-routes/
function ProtectedRoute({ children }) {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
    return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute