import Providers from "@/utils/Providers";
import "./globals.css";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
        style={{
          backgroundColor: "var(--main-background)",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
