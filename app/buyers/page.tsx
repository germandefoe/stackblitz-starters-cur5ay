import { getBuyers } from '@/lib/api';

export default async function BuyersPage() {
  const buyers = await getBuyers();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Buyers</h1>
      <ul>
        {buyers.map((buyer) => (
          <li key={buyer.id} className="mb-2">
            <span className="font-semibold">{buyer.name}</span> - {buyer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}