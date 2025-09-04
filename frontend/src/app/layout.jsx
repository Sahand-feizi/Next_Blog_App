import kalamehFont from "@/constants/localFonts";
import "@/styles/globals.css";

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
        {children}
      </body>
    </html>
  );
}
