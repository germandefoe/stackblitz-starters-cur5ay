import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Marketplace</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/sellers" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sellers
        </Link>
        <Link href="/buyers" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Buyers
        </Link>
        <Link href="/offerings" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Offerings
        </Link>
        <Link href="/orders" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Orders
        </Link>
      </div>
    </main>
  );
}