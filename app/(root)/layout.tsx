export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-scree flex-coluumn">
            <main className="flex-1 wrapper">
                {children}
            </main>
        </div>
    );
}