import type { Work } from "../models/work";
import projects from "./projects.json";

// Export the projects data as work with proper type assertion
const work = projects as Work[];

export default work;
