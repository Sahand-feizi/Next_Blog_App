import kalamehFont from "@/constants/localFonts";
import AuthProvider from "@/context/AuthContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | وبلاگ",
    default: "وبلاگ"
  },
  description: "وبسایت مدیریت بلاگ ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${kalamehFont.variable} sans`}>
        <ReactQueryProvider>
          <AuthProvider>
            <Toaster />
            {children}
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
