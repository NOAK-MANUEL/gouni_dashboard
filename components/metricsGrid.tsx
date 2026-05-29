"use client";

import { StudentType } from "./data";

export default function MetricsGrid({ students }:{students:StudentType[]}) {
  const paid = students.filter((s) => s.paid).length;

  const metrics = [
    {
      label: "Total Students",
      value: students.length,
      color: "text-blue-600"
    },
    {
      label: "Fee Paid",
      value: paid,
            color: "text-green-800"

    },
    {
      label: "Pending",
      value: students.length - paid,
            color: "text-yellow-400"

    },
    {
      label: "Programmes",
      value: new Set(students.map((s) => s.programme)).size,
            color: "text-green-800"

    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-white rounded-2xl  p-6 shadow-sm"
        >
          <p className="text-sm text-gray-500">
            {metric.label}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${metric.color}`}>
            {metric.value.toLocaleString()}
          </h2>
        </div>
      ))}
    </div>
  );
}