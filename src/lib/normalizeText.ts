const replacements: Array<[string, string]> = [
  ["Ã—", "x"],
  ["â€“", "-"],
  ["â€”", "-"],
  ["â€¢", "-"],
  ["Â©", "Copyright"],
];

export function normalizeText(value: string): string {
  let next = value;
  for (const [from, to] of replacements) {
    next = next.replaceAll(from, to);
  }
  return next;
}
