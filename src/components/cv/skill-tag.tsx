type SkillTagProps = {
  label: string;
};

export function SkillTag({ label }: SkillTagProps) {
  return <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">{label}</span>;
}
