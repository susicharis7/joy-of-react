import AdminDashboard from "./AdminDashboard";

// This is how we would do with the `&&`
// But it looks a bit clunky
function SecondApp({ user }) {
    const isLoggedIn = !!user;

    return(
        <>
            {isLoggedIn && <AdminDashboard />}
            {!isLoggedIn && <h1>Please login first</h1>}
        </>
    )
}



// That is why we have ternary operations
function App({ user }) {
    const isLoggedIn = !!user;

    return(
        <>
         {isLoggedIn ? <AdminDashboard /> : <h1>Please login first.</h1>}
        </>
    )
}

export default App;