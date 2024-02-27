export function objectToURL(params: { [key: string]: unknown }): string {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    // Convierte todos los valores a cadenas antes de añadirlos.
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  }

  return searchParams.toString();
}
