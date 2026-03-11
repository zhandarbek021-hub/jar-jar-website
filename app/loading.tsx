export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            <span className="text-primary-600">JAR JAR</span> RESIDENCE
          </div>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-600 rounded-full overflow-hidden">
            <div
              className="h-full w-1/3 bg-gold-500"
              style={{
                animation: 'loading-shimmer 1.5s infinite',
              }}
            />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="w-12 h-12 border-4 border-dark-100 border-t-primary-600 rounded-full animate-spin" />
      </div>
    </div>
  );
}
