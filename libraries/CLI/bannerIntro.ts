//
// start-code
//
// Types
//
import { introContext } from "./types";
//
// introBanner function
//
export async function introBanner(ctx: introContext): Promise<void> {
  if (!context.skipWelcome) {
    console.log("Welcome to Códices!\n");
    console.log(ctx.welcome ?? "!");
  }
}
//
// context
//
const context: introContext = {
  skipWelcome: false,
  welcome: "Let's Build Something Beautiful!\n",
};
//
// Use introBanner
//
introBanner(context);
//
// endcode
//
