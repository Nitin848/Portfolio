"use client"

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-blue-200 dark:border-blue-900 animate-spin border-t-blue-600 dark:border-t-blue-400"></div>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </div>
    </div>
  );
}