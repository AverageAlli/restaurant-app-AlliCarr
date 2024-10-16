import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Entrees() {
  const [entrees, setEntrees] = useState('');

  useEffect(() => {
    fetch('/entrees.txt')
      .then((response) => response.text())
      .then((data) => setEntrees(data))
      .catch((error) => console.error('Error fetching entrees:', error));
  }, []);

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
        <h1 className="text-2xl font-bold text-center">Entrees</h1>
        <p className="mt-4">{entrees}</p>
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
