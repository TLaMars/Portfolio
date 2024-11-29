import data from "$lib/data/projects.json";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => ({
  work: data
});
