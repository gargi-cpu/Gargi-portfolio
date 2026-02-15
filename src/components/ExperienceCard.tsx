import { normalizeText } from "@/lib/normalizeText";

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

function inferImpact(items: string[]): string {
  const metricLine = items.find((line) => /(\d+%|improv|gain|reduction)/i.test(line));
  return metricLine
    ? normalizeText(metricLine)
    : "Impact was focused on delivery quality and reliability.";
}

export default function ExperienceCard({
  company,
  role,
  period,
  highlights,
}: ExperienceCardProps) {
  return (
    <article className="panel gradient-border rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white">
        {normalizeText(company)} - {normalizeText(role)} - {normalizeText(period)}
      </h3>
      <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-muted)]">
        {highlights.map((item) => (
          <li key={item}>- {normalizeText(item)}</li>
        ))}
        <li>- {inferImpact(highlights)}</li>
      </ul>
    </article>
  );
}
