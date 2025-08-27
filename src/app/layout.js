import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Shop",
  description: "Next.js 15 + NextAuth Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="container mx-auto p-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
