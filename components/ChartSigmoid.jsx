"use client";
import { useState } from "react";

function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

export default function ChartSigmoid() {
  const [weight, setWeight] = useState(1);
  const [bias, setBias] = useState(0);
  const [x, setX] = useState(0);

  const width = 560;
  const height = 320;
  const padding = 36;
  const minX = -6;
  const maxX = 6;

  const sx = (x) => padding + ((x - minX) / (maxX - minX)) * (width - 2 * padding);
  const sy = (y) => height - padding - y * (height - 2 * padding);

  const points = Array.from({ length: 200 }, (_, i) => {
    const x = minX + (i / 199) * (maxX - minX);
    const y = sigmoid(weight * x + bias);
    return { x, y };
  });

  const prob = sigmoid(weight * x + bias);

  return (
    <div className="card">
      <div className="controls">
        <div className="control">
          <label>Weight (w): {weight.toFixed(2)}</label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.01"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <div className="control">
          <label>Bias (b): {bias.toFixed(2)}</label>
          <input
            type="range"
            min="-5"
            max="5"
            step="0.01"
            value={bias}
            onChange={(e) => setBias(parseFloat(e.target.value))}
          />
        </div>
        <div className="control">
          <label>Input x: {x.toFixed(2)}</label>
          <input
            type="range"
            min={minX}
            max={maxX}
            step="0.01"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
          />
          <div className="pred">P(y=1|x) = ?(w?x + b) = {prob.toFixed(3)}</div>
        </div>
      </div>

      <svg width={width} height={height} className="chart">
        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#94a3b8" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#94a3b8" />

        {/* 0-1 ticks */}
        <text x={padding - 22} y={sy(0)} fontSize="12" fill="#475569">0</text>
        <text x={padding - 22} y={sy(1)} fontSize="12" fill="#475569">1</text>

        {/* Sigmoid curve */}
        <polyline
          fill="none"
          stroke="#8b5cf6"
          strokeWidth={3}
          points={points.map((p) => `${sx(p.x)},${sy(p.y)}`).join(" ")}
        />

        {/* Current x marker */}
        <line x1={sx(x)} y1={sy(0)} x2={sx(x)} y2={sy(prob)} stroke="#ef4444" strokeDasharray="4 4" />
        <circle cx={sx(x)} cy={sy(prob)} r={5} fill="#ef4444" />
      </svg>
    </div>
  );
}
