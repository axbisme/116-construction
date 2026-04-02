interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) => {
  const alignmentClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col gap-3 ${alignmentClass}`}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p> : null}
      <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
