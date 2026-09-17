type SkillTagProps = {
  label: string;
};

export function SkillTag({ label }: SkillTagProps) {
  return <span className="skill-tag rounded-md border border-[#0D6EFD] bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">{label}</span>;
}
