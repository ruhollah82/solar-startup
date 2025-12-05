import { create } from "zustand";
import type { Project } from "../types/index";
import { projectsData } from "../data/projects";

interface ProjectStore {
  projects: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  getFeaturedProjects: () => Project[];
  getProjectById: (id: string) => Project | undefined;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: projectsData,
  selectedProject: null,

  setSelectedProject: (project) => set({ selectedProject: project }),

  getFeaturedProjects: () => {
    return get()
      .projects.filter((project) => project.status === "completed")
      .slice(0, 5);
  },

  getProjectById: (id) => {
    return get().projects.find((project) => project.id === id);
  },
}));
