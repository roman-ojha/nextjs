export default function Layout({
  children,
  users, // we can import these slots as a props
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactDOM;
}) {
  // To conditional render the Login page as per user authentication
  const isLoggedIn = false;
  return isLoggedIn ? (
    <main>
      <div>
        <h1>{children}</h1>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    </main>
  ) : (
    login
  );
}
