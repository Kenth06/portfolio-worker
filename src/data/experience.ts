export interface Position {
  title: string;
  period: string;
  years: string;
}

export interface ExperienceItem {
  company: string;
  positions: Position[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "RednBlue",
    positions: [
      {
        title: "Developer",
        period: "2024–Present",
        years: "2024-Present",
      },
      {
        title: "Customer Service Agent",
        period: "2022-2024",
        years: "2022-2024",
      },
    ],
  },
];
