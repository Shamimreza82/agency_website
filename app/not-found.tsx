// pages/404.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go Home
        </button>
      </Link>
    </div>
  );
}
