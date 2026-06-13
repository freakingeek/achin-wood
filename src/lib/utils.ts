type ClassValue = string | number | boolean | null | undefined | ClassValue[] | Record<string, boolean | null | undefined>;

export function cn(...inputs: ClassValue[]) {
  return inputs.flatMap(normalizeClassValue).filter(Boolean).join(" ");
}

function normalizeClassValue(input: ClassValue): string[] {
  if (!input) {
    return [];
  }

  if (typeof input === "string" || typeof input === "number") {
    return [String(input)];
  }

  if (Array.isArray(input)) {
    return input.flatMap(normalizeClassValue);
  }

  return Object.entries(input)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);
}
