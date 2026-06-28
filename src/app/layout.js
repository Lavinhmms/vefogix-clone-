import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "VefoGix - AI-Powered Link Building & Guest Post Marketplace",
  description: "Distribute on 70k+ Websites Across the Globe! AI-Powered Link Building and Guest Post Marketplace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: "80vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
