
import MetricsGrid from "@/components/metricsGrid";
import PaymentDonutChart from "@/components/paymentDonutChart";
import FacultyLevelChart from "@/components/facultyLevelChart";
import StudentsTable from "@/components/studentsTable";

import { generateStudents } from "@/components/data";

export default function DashboardPage() {
  const students = generateStudents();

  return (
    <div className="">

<main className="pt-16 pb-24 px-2 md:px-6 bg-gradient-to-br from-blue-50 via-white to-sky-50">
          <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            Admissions Dashboard
          </h1>

          <p className="text-blue-600 mt-1">
            2026 / 2027 Session
          </p>
        </div>

        <MetricsGrid students={students} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <PaymentDonutChart students={students} />

          <FacultyLevelChart students={students} />
        </div>

        <div className="mt-6">
          <StudentsTable students={students} />
        </div>
      </main>
    </div>
  );
}