// Let's assume that to display different component like 'User analytics', 'Revenue Metric' & 'Notification' section on our dashboard we will create the different component and the import it into this layout
import UserAnalytics from "@/components/UserAnalytics";
import RevenueMetrics from "@/components/RevenueMetrics";
import Notifications from "@/components/Notifications";

export default function Layout({ children }: { children: any }) {
  return (
    <main>
      {/* This is the traditional way of managing component inside the dashboard */}
      {/* But we can achieve the same function using the parallel routes also come with additional benefits */}
      <div>{children}</div> {/* Content from page.tsx */}
      <UserAnalytics />
      <RevenueMetrics />
      <Notifications />
    </main>
  );
}
