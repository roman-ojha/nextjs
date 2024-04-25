import Card from "@/components/card";
import type { NextPage } from "next";
import Link from "next/link";

const Notification: NextPage = () => {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default Notification;
