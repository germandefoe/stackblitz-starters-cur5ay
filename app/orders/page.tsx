import { getOrders } from '@/lib/api';

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="mb-2">
            <span className="font-semibold">Order #{order.id}</span> - ${order.totalAmount} ({order.status})
          </li>
        ))}
      </ul>
    </div>
  );
}