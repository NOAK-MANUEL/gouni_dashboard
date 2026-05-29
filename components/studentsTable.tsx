"use client";

import { StudentType } from "./data";

export default function StudentsTable({ students }:{students:StudentType[]}) {
  return (
    <div className="bg-white rounded-2xl  shadow-sm overflow-hidden">
      <div className="p-5 border-b">
        <h2 className="font-semibold">
          Admitted Students
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-4">Student</th>
              <th className="text-left p-4">Programme</th>
              <th className="text-left p-4">Faculty</th>
              <th className="text-left p-4">Level</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {students.slice(0, 15).map((student) => (
              <tr
                key={student.id}
                className="border-t"
              >
                <td className="p-4">
                  {student.name}
                </td>

                <td className="p-4">
                  {student.programme}
                </td>

                <td className="p-4">
                  {student.faculty}
                </td>

                <td className="p-4">
                  {student.level}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.paid
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {student.paid
                      ? "Paid"
                      : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}