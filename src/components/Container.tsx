interface Props { className?: string; children: React.ReactNode; }

const Container = ({ children, className }: Props) => (
  <div className={`mx-auto w-full max-w-7xl px-5 ${className ?? ''}`}>{children}</div>
);

export default Container;
