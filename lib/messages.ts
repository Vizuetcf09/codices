/*
 * massage:
 *
 * Function: introMessages
 *
 * Massage:
 *
 * - Welcome to Códices!
 * -
 * - Let's Build Something Beautiful!
 */
import inquirer from "inquirer";

import { introContextTypes } from "./CLI/types";

export async function introMessages(ctx: introContextTypes): Promise<void> {
  if (!ctx.skipWelcome) {
    console.log("Welcome to Códices!\n");
    console.log(ctx.welcome ?? "!");
  }
}

export const ctx: introContextTypes = {
  skipWelcome: false,
  welcome: "Let's Build Something Beautiful!\n",
};

const fetchProjectTypes = async () => {
  // Simula una consulta a una base de datos o archivo
  return ["Astro", "React", "VanillaJS"];
};

export async function projectType() {
  const projectTypes = await fetchProjectTypes();

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "projectType",
      message: "What type of project are you developing?",
      choices: projectTypes,
      loop: false,
    },
  ]);

  console.log(`You are developing a ${answers.projectType} project!`);
}

// Llamar a la función
introMessages(ctx);
projectType();
