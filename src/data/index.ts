import type { Work } from "../models/work";
import { andC } from "./projects/and-c";
import { fmGroup } from "./projects/fm-group";
import { gitbar } from "./projects/gitbar";
import { kibbel } from "./projects/kibbel";
import { vfzApp } from "./projects/vfz-app";

export const works: Work[] = [gitbar, vfzApp, kibbel, andC, fmGroup];
