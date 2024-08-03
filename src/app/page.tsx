import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const AppWithoutSSR = dynamic(() => import("@/app/App"), { ssr: false });

export const metadata = {
    title: 'Phaser Nextjs Template', 
    description: 'A Phaser 3 Next.js project template that demonstrates Next.js with React communication and uses Vite for bundling.'
}

export default function Home() {
    return (
        <>
            <main className={`${styles.main} ${inter.className}`}>
                <AppWithoutSSR />
            </main>
        </>
    );
}
