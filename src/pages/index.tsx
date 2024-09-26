import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { DM_Sans } from "next/font/google";
import { CountdownTimer } from "@/components/CountdownTimer";
import { SpecialFeature } from "@/components/SpecialFeature";

export const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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
        <SpecialFeature isActive={isActive} />
      </Layout>
    </div>
  );
}
