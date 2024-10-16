import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="bg-gray-800 text-white py-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/appetizers" className="hover:text-gray-300">Appetizers</Link></li>
            <li><Link href="/entrees" className="hover:text-gray-300">Entrees</Link></li>
          </ul>
        </nav>
      </header>
      <main className="text-center my-10">
        <h1 className="text-3xl font-bold">Welcome to Our Restaurant</h1>
      </main>
      <footer className="text-center py-4 border-t border-gray-300">
        © 2024 Our Restaurant
      </footer>
    </div>
  );
}
