import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { DM_Sans } from "next/font/google";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Calendar } from "@/components/ui/calendar";
import Status from "@/components/Status";
import Banner from "@/components/Banner";

export const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

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
        <div className="grid grid-cols-[2fr_1fr] items-center gap-6 mx-auto max-w-[1347px]">
          <Banner />
          <Status isActive={isActive} />
        </div>
        <CountdownTimer />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </Layout>
    </div>
  );
}
