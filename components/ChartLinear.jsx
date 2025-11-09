"use client";
import { useMemo, useState } from "react";

function generatePoints() {
  // Simple demo dataset around y ? 2x + 1 with noise
  const pts = [];
  for (let x = 0; x <= 10; x++) {
    const noise = (Math.random() - 0.5) * 2; // [-1, 1]
    pts.push({ x, y: 2 * x + 1 + noise });
  }
  return pts;
}

export default function ChartLinear() {
  const [slope, setSlope] = useState(2);
  const [intercept, setIntercept] = useState(1);
  const [xPred, setXPred] = useState(4);
  const points = useMemo(() => generatePoints(), []);

  const width = 560;
  const height = 320;
  const padding = 36;
  const maxX = 10;
  const maxY = 25;

  const sx = (x) => padding + (x / maxX) * (width - 2 * padding);
  const sy = (y) => height - padding - (y / maxY) * (height - 2 * padding);

  const yPred = slope * xPred + intercept;

  // line endpoints at x=0..maxX
  const x1 = 0;
  const y1 = slope * x1 + intercept;
  const x2 = maxX;
  const y2 = slope * x2 + intercept;

  return (
    <div className="card">
      <div className="controls">
        <div className="control">
          <label>Slope (m): {slope.toFixed(2)}</label>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.01"
            value={slope}
            onChange={(e) => setSlope(parseFloat(e.target.value))}
          />
        </div>
        <div className="control">
          <label>Intercept (b): {intercept.toFixed(2)}</label>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.1"
            value={intercept}
            onChange={(e) => setIntercept(parseFloat(e.target.value))}
          />
        </div>
        <div className="control">
          <label>Predict at x: {xPred.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={xPred}
            onChange={(e) => setXPred(parseFloat(e.target.value))}
          />
          <div className="pred">y? = m?x + b = {(slope * xPred + intercept).toFixed(2)}</div>
        </div>
      </div>

      <svg width={width} height={height} className="chart">
        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#94a3b8" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#94a3b8" />

        {/* Data points */}
        {points.map((p, i) => (
          <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={4} fill="#2563eb" />
        ))}

        {/* Regression line */}
        <line x1={sx(x1)} y1={sy(y1)} x2={sx(x2)} y2={sy(y2)} stroke="#10b981" strokeWidth={3} />

        {/* Prediction marker */}
        <circle cx={sx(xPred)} cy={sy(yPred)} r={5} fill="#ef4444" />
        <text x={sx(xPred) + 8} y={sy(yPred) - 6} fontSize="12" fill="#ef4444">
          ({xPred.toFixed(1)}, {yPred.toFixed(1)})
        </text>
      </svg>
    </div>
  );
}
