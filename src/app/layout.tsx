import '@/styles/globals.css'

export const metadata = {
    title: 'NextJS Phaser Template',
    description: 'NextJS App Router Phaser Template'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
