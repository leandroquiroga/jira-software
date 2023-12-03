


interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string,
  createdAt:number,
  status: "pending" | "in-progress" | "finished",
}


export const seedData: SeedData = {
  entries: [
    {
      description: "Tomar un te",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description: "Estudiar en Udemy",
      createdAt: Date.now() - 1000000,
      status: "in-progress",
    },
    {
      description: "Salir a merendar",
      createdAt: Date.now() - 100000,
      status: "finished",
    },
  ],
};