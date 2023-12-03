import { Inter,Lora } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Nav from "@/components/Nav";

const inter = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Your connected workspace · Notion",
  description: "notion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="full"
        >
          <Nav />
          <div className="flex justify-center  min-w-screen ">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
