type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <h2 className="border-none !text-7xl ">
      <span className="block !text-sm text-slate-400 font-opensauce">
        {subtitle}
      </span>
      {title}
    </h2>
  );
};
