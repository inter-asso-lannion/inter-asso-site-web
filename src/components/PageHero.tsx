type PageHeroProps = {
  title: string;
  subtitle?: string;
  /** Override the vertical padding. Default: "py-16 md:py-24" */
  paddingY?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  title,
  subtitle,
  paddingY = "py-16 md:py-24",
  children,
}: PageHeroProps) {
  return (
    <section
      className={`bg-linear-to-br from-purple-600 via-pink-500 to-orange-400 text-white ${paddingY}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
