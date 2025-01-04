import "./globals.css";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex justify-center items-center p-6 bg-slate-50 ml-72 w-full min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
