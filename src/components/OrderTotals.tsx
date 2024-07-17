import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalProps) {

    const subtotalAmount = useMemo(() => 
        order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order]);

    const tipAmount = useMemo( () => subtotalAmount * tip, [tip, subtotalAmount])
    const totalAmount = useMemo( () => tipAmount + subtotalAmount, [subtotalAmount, tipAmount])

    return (
        <>
        <div className="space-y-3">
            <h2 className="text-2xl font-black">Totales y Propina:</h2>

            <p>
            Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>

            <p>
            Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p>
            Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
            className="w-full p-3 mt-10 font-bold text-white uppercase bg-black disabled:opacity-5"
            disabled={totalAmount === 0}
            onClick={() => placeOrder()}
        >
            Guardar Orden
        </button>
        </>
    );
}
