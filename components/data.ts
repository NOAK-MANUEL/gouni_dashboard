export const FACULTIES = {
  "Management & Social Sciences": [
    "Accounting",
    "Banking & Finance",
    "Management",
    "Marketing",
    "Public Administration",
    "Economics",
    "International Relations",
    "Political Science",
    "Mass Communication",
  ],
  "Natural & Applied Sciences": [
    "Applied Biology",
    "Biotechnology",
    "Microbiology",
    "Biochemistry",
    "Chemistry",
    "Industrial Chemistry",
    "Computer Science",
    "Mathematics",
    "Physics",
    "Geology & Mining",
    "Geography & Environmental Mgt",
  ],
  Education: [
    "Biology Education",
    "Chemistry Education",
    "Computer Science Education",
    "Mathematics Education",
  ],
  Arts: [
    "English & Literature Studies",
    "Music",
    "Philosophy",
  ],
  Law: ["Law"],
  "College of Medicine": [
    "Medicine & Surgery",
    "Nursing Science",
  ],
};

export const FAC_COLORS = {
  "Management & Social Sciences": "#2563eb",
  "Natural & Applied Sciences": "#16a34a",
  Education: "#d97706",
  Arts: "#7c3aed",
  Law: "#dc2626",
  "College of Medicine": "#0891b2",
};

const NAMES = [
  "Chukwuemeka Obi",
  "Adaeze Nwosu",
  "Ifeanyi Eze",
  "Ngozi Ugwu",
  "Chidera Onah",
  "Amaka Okeke",
  "Ikenna Nwachukwu",
  "Chioma Agu",
  "Emeka Okafor",
];

function sr(seed:number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
export interface StudentType{
  id:number
  name: string
  programme:string
  faculty:string
  level:string
  paid: boolean
  matric: string
}
export function generateStudents(): StudentType[]{
  const students:StudentType[] = [];
  let id = 1;
  let seed = 42;

  Object.entries(FACULTIES).forEach(([faculty, programmes]) => {
    programmes.forEach((programme) => {
      const total = Math.floor(sr(seed++) * 50) + 20;

      for (let i = 0; i < total; i++) {
        students.push({
          id,
          name: NAMES[id % NAMES.length],
          programme,
          faculty,
          level: sr(seed++) < 0.15 ? "200" : "100",
          paid: sr(seed++) < 0.7,
          matric: `GOU/${String(id).padStart(4, "0")}/24`,
        });

        id++;
      }
    });
  });

  return students;
}