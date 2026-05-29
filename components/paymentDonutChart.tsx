"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { StudentType } from "./data";

export default function PaymentDonutChart({ students }:{students:StudentType[]}) {
  const paid = students.filter((s) => s.paid).length;
  const unpaid = students.length - paid;

  const data = [
    { name: "Paid", value: paid },
    { name: "Unpaid", value: unpaid },
  ];

  return (
    <div className="bg-white rounded-2xl  p-5 shadow-sm h-[350px]">
      <h2 className="font-semibold mb-4">
        Acceptance Fee Status
      </h2>
      <div className="flex justify-between">
        <p className="flex gap-2">
        Paid <span className=" inline-block w-6 bg-blue-600 " ></span>
      </p>
      <p className="flex gap-2">
        Unpaid <span className="inline-block w-6 bg-amber-300 " ></span>
      </p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
          >
            <Cell fill="#2563eb" />
            <Cell fill="#F5DA27" />
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}