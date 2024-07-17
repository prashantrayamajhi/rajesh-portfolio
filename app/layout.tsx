import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Rajesh Poudel | Portfolio",
  description: `I'm a post-graduate student with a passion for data analytics, information technology, and machine learning. Experienced computer operator in various municipal sectors in Kathmandu, Nepal. Skilled in revenue collection, registrar duties, and storekeeping. Conducted a climate change impact survey in Nepal's highlands. Interned as a front-end developer at Webmandu Nepal. Proficient in Red Hat Enterprise Linux and Python, along with languages like C, C++, and JAVA. Accomplished projects in Python-based disease prediction and PHP-based E-commerce. Actively engaged in co-curricular activities, including volunteering for earthquake relief, COVID-19 awareness campaigns, wildlife monitoring, and various community service initiatives. Eager to apply expertise in both data analytics and machine learning to new challenges.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
