import type { Work } from "../models/work";
import { andC } from "./projects/and-c";
import { fmGroup } from "./projects/fm-group";
import { gitbar } from "./projects/gitbar";
import { kibbel } from "./projects/kibbel";
import { vfzApp } from "./projects/vfz-app";
import { wandrd } from "./projects/wandrd";

export const works: Work[] = [gitbar, wandrd, vfzApp, kibbel, andC, fmGroup];
