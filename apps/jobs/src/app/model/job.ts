export interface Job {
    id: number;
    title: string;
    company: string;
    location:string;
    description:string;
}

export const jobs: Job[] = [
    {
        id: 1,
        title: "Angular Junior Developer",
        company: "Prodapt",
        location: "Panama, Panama City (Remote)",
        description: 
        `Junior developer who knows: how to pass data from child to parent,
        from parent to child.
        `
      },
      {
        id: 2,
        title: "Javascript Junior Developer",
        company: "Prodapt",
        location: "Panama, Panama City(Remote)",
        description:
        `Junior developer who know:
        -Declare variables
        -Iterables loops
        -Arrays
        -Objects
        -Async programming
        `
      },
      {
        id: 3,
        title: "IT Support Assistant",
        company: "Prodapt",
        location: "Panama, Panama City(Remote)",
        description:
        `Junior asistant that know this things:
        -MS Office
        -Windows 11
        -Install OS (Linux and Windows)
        -Install drivers and hardware stuff
        `
      },
      {
        id: 4,
        title: "C# ASP.Net Junior Developer",
        company: "Banco General",
        location: "Panama, Panama City (On site)",
        description:
        `Searching for junior dev who knows this things in C#:
        -Do a basic MVC app
        -Handle Entity Framework
        -MSSQL (the basic)
        `
      },
      {
        id: 5,
        title: "DevOps Engineer",
        company: "Copa Airlines",
        location: "Panama, Panama City, Tocumen (Remote)",
        description:
        ` Devops engineer who knows:
        -Docker
        -AWS Platform (CI/CD)
        -Mongo DB
        -Kubernets
        -NodeJS
        `
      }
]
