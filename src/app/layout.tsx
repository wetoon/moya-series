import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import "./globals.css";

const font = IBM_Plex_Sans_Thai_Looped({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin-ext", "latin", "thai"],
    preload: false
});

export const metadata: Metadata = {
    title: "Moya Series",
    description: "Moya Moya Chinese Mini Series",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={ font.className }>
                { children }
            </body>
        </html>
    );
}
