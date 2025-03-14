import { icons } from "@tabler/icons-react";

interface ProjectDetailsProps {
    title: string;
    date: string;
    description: string;
    badges: string[];
    icon: keyof typeof icons;
    color: string;
  }