"use client";

import { useMemo } from "react";

export default function OrdersMap({ orders }) {
  // Centro visual do mapa (cidade fixa)
  const cityQuery = "Congonhal MG";

  // Mock visual: espalha pontos aleatoriamente no mapa
  const points = useMemo(() => {
    return orders.map((order) => ({
      id: order.id,
      top: `${30 + Math.random() * 40}%`,
      left: `${30 + Math.random() * 40}%`,
    }));
  }, [orders]);

  return (
    <header className="relative w-full h-72  overflow-hidden">
      {/* MAPA (FUNDO) */}
      <iframe
        className="absolute inset-0 w-full h-full grayscale"
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          cityQuery,
        )}&output=embed`}
        loading="lazy"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {points.map((point) => (
          <span
            key={point.id}
            className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"
            style={{
              top: point.top,
              left: point.left,
            }}
          />
        ))}
      </div>

      {/* GRADIENTE / ESTÉTICA */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/30 to-transparent" />
    </header>
  );
}
