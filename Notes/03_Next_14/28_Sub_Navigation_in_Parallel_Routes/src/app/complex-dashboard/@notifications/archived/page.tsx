// this is the normal route that we added inside the notification slot
// here we will display the archived notifications

import Card from "@/components/card";
import type { NextPage } from "next";
import Link from "next/link";

const ArchivedNotification: NextPage = () => {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotification;
