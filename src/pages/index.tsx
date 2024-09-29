import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { DM_Sans } from "next/font/google";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Calendar } from "@/components/ui/calendar";
import Status from "@/components/Status";

export const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [date, setDate] = useState<Date | undefined>(new Date());

  console.log(date);

  useEffect(() => {
    setIsMounted(true);
    const now = new Date();
    const currentHour = now.getHours();
    setIsActive(currentHour >= 15 && currentHour < 22);
  }, []);

  if (!isMounted) return null; // Ensure rendering only happens on the client

  return (
    <div data-theme="light" className={dmSans.className}>
      <Layout>
        <CountdownTimer />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <Status isActive={isActive} />
      </Layout>
    </div>
  );
}
