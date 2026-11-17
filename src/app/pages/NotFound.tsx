import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="mb-4">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="text-[#94A3B8] text-xl">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] text-white rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 font-semibold"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors inline-flex items-center justify-center gap-2 border border-white/10"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
