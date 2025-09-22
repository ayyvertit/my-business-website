export default function DebugEnvPage() {
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  const secretKey = process.env.CLERK_SECRET_KEY
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)] flex items-center justify-center p-4">
      <div className="bg-white/95 dark:bg-[var(--deep-tide)]/95 rounded-2xl shadow-xl p-8 max-w-2xl">
        <h1 className="text-2xl font-bold text-[var(--deep-tide)] dark:text-white mb-6">
          Environment Variables Debug
        </h1>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
              NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
            </h3>
            <p className="text-sm text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] break-all">
              {clerkKey ? `✅ ${clerkKey.substring(0, 20)}...` : '❌ Not set'}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
              CLERK_SECRET_KEY:
            </h3>
            <p className="text-sm text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] break-all">
              {secretKey ? `✅ ${secretKey.substring(0, 20)}...` : '❌ Not set'}
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-[var(--coastal-mist)]/20 dark:bg-[var(--ocean-foam)]/20 rounded-lg">
            <h3 className="font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
              Status:
            </h3>
            <p className="text-sm text-[var(--deep-tide)] dark:text-[var(--ocean-foam)]">
              {clerkKey && secretKey ? '✅ All environment variables are configured' : '❌ Missing environment variables'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
