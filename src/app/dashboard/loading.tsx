export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)] flex items-center justify-center">
            <div className="animate-pulse">
                <div className="h-8 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded mb-4"></div>
                <div className="h-4 bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)] rounded"></div>
            </div>
        </div>
    )
}
