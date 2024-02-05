import { FetchProvider } from "./context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Dua App",
  description: "Created for IRD Foundation as task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FetchProvider>
      <body>{children}</body>
      </FetchProvider>
    </html>
  );
}
