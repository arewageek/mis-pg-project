import { Navigation } from "@/components/globals/Navigation";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "PostGrad Management System",
  description:
    "A management system to enable post graduate students upload project work to the cloud for review and submission",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-100 text-gray-700 py-12 lg:py-24">
          {/* <Navigation /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
