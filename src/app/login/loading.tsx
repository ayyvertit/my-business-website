export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/95 dark:bg-[var(--deep-tide)]/95 backdrop-blur rounded-2xl shadow-xl border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] p-8 text-center">
                    <div className="animate-pulse">
                        <div className="h-8 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded mb-4"></div>
                        <div className="h-4 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded mb-6"></div>
                        <div className="h-10 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
