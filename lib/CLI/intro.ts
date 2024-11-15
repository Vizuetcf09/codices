// Definición de tipo para el contexto sin version ni username
interface IntroContext {
  skipWelcome: boolean;
  welcome?: string;
}

// Función de bienvenida con banner
export async function intro(ctx: IntroContext): Promise<void> {
  // Imprimir un banner simple
  if (!context.skipWelcome) {
    console.log("Welcome to Códices!\n");
    console.log(ctx.welcome ?? "!");
  }
}

// Ejemplo de contexto para probar la función
const context: IntroContext = {
  skipWelcome: false,
  welcome: "Lets Build Something Beutiful!\n",
};

// Llamada a la función de bienvenida
intro(context);
