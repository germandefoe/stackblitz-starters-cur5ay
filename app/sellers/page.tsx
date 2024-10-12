import { getSellers } from '@/lib/api';

export default async function SellersPage() {
  const sellers = await getSellers();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sellers</h1>
      <ul>
        {sellers.map((seller) => (
          <li key={seller.id} className="mb-2">
            <span className="font-semibold">{seller.name}</span> - {seller.contactInfo}
          </li>
        ))}
      </ul>
    </div>
  );
}