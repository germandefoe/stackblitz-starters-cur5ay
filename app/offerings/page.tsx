import { getOfferings } from '@/lib/api';

export default async function OfferingsPage() {
  const offerings = await getOfferings();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Offerings</h1>
      <ul>
        {offerings.map((offering) => (
          <li key={offering.id} className="mb-2">
            <span className="font-semibold">{offering.title}</span> - ${offering.basePrice}
          </li>
        ))}
      </ul>
    </div>
  );
}