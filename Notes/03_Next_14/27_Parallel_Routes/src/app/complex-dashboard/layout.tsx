// Let's assume that to display different component like 'User analytics', 'Revenue Metric' & 'Notification' section on our dashboard we will create the different component and the import it into this layout
// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";
/* This is the traditional way of managing component inside the dashboard */
/* But we can achieve the same function using the parallel routes also come with additional benefits */
// Now using parallel routes every slots that we create will get pass automatically file component as props which we can use to structure the dashboard page

export default function Layout({
  children,
  users, // we can import these slots as a props
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <main>
      {/* <UserAnalytics />
      <RevenueMetrics />
      <Notifications /> */}
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
  );
}
