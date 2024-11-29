import data from "$lib/data/projects.json";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) =>
  data.find((project) => project.slug === params.slug);
