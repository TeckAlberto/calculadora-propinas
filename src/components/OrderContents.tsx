import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem}: OrderContentsProps) {

  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>

      <div className="mt-5 space-y-3">
        {order.map((item) => (
            <div 
              key={item.id}
              className="flex items-center justify-between py-5 border-t border-gray-200 last-of-type:border-b"
            >

              <div className="">
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>

                <p className="font-black">
                  Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              

              <button
                className="w-8 h-8 font-black text-white bg-red-600 rounded-full"
                onClick={() => removeItem(item.id)}
              >X</button>
            </div>
          ))}
      </div>
    </div>
  );
}
