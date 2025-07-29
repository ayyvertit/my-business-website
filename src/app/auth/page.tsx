'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import Cookies from 'js-cookie';

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD || password === 'nova2025') {
      Cookies.set('auth', 'true', { expires: 1 });
      router.push(redirect);
    } else {
      setError('Incorrect password.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Enter Password</h1>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AuthForm />
    </Suspense>
  );
} 