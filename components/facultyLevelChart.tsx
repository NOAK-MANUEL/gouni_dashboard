"use client";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

import { FACULTIES, StudentType } from "./data";

export default function FacultyLevelChart({ students }:{students:StudentType[]}) {
  const data = Object.keys(FACULTIES).map((faculty) => ({
    faculty,

    level100: students.filter(
      (s) =>
        s.faculty === faculty &&
        s.level === "100"
    ).length,

    level200: students.filter(
      (s) =>
        s.faculty === faculty &&
        s.level === "200"
    ).length,
  }));

  return (
    <div className="bg-white rounded-2xl  p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="font-semibold text-lg">
          Admissions by Faculty
        </h2>

        {/* <p className="text-sm text-gray-500 mt-1">
          100 Level vs 200 Level
        </p> */}
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto">
        {/* Fixed minimum width */}
        <div className="min-w-[900px] h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="faculty"
                angle={-15}
                textAnchor="end"
                interval={0}
                tick={{
                  fontSize: 12,
                }}
              />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="level100"
                fill="#2563eb"
                radius={[6, 6, 0, 0]}
                name="100 Level"
              />

              <Bar
                dataKey="level200"
                fill="#16a34a"
                radius={[6, 6, 0, 0]}
                name="200 Level"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}