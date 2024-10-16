import React from 'react';
import Link from 'next/link';

export default function Appetizers() {
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
      <main className="my-10">
        <h1 className="text-2xl font-bold text-center">Appetizers</h1>
        <ul className="list-disc list-inside my-4">
          <li>Garlic Bread - A crispy delight topped with fresh garlic and melted butter.</li>
          <li>Bruschetta - A traditional Italian appetizer with tomatoes, basil, and olive oil.</li>
          <li>Stuffed Mushrooms - Savory mushrooms filled with cheese and herbs.</li>
        </ul>
        <nav className="text-center my-4">
          <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Back to Home</Link>
        </nav>
      </main>
      <footer className="text-center py-4 border-t border-gray-300">
        © 2024 Our Restaurant
      </footer>
    </div>
  );
}
