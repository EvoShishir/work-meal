import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { DM_Sans } from "next/font/google";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Calendar } from "@/components/ui/calendar";
import Status from "@/components/Status";
import Banner from "@/components/Banner";
import { CustomChart } from "@/components/CustomChart";

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
    const currentMinute = now.getMinutes();

    const isWithinActiveHours =
      (currentHour === 15 && currentMinute >= 0) || // 15:00 to 15:59
      (currentHour > 15 && currentHour < 21) || // 16:00 to 20:59
      (currentHour === 21 && currentMinute <= 30); // 21:00 to 21:30

    setIsActive(isWithinActiveHours);
  }, []);

  if (!isMounted) return null; // Ensure rendering only happens on the client

  return (
    <div data-theme="light" className={dmSans.className}>
      <Layout>
        <div className="pt-12 container mx-auto">
          <div className="lg:grid grid-cols-[2fr_1fr] items-center gap-6 mx-auto ">
            <Banner />
            <Status isActive={isActive} />
          </div>
          <br />
          <div className="lg:grid grid-cols-3 justify-center items-center gap-6 mx-auto ">
            <CountdownTimer />
            <div className="card bg-base-100 shadow-xl flex justify-center items-center h-full">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md w-full"
              />
            </div>
            <CustomChart />
          </div>
        </div>
      </Layout>
    </div>
  );
}
