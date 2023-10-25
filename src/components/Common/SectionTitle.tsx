const SectionTitle = ({
  title,
  SubTitle,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  SubTitle: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-6xl font-light text-blue-600 !leading-tight  sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <h2 className="mb-4 text-6xl font-bold text-blue-600 !leading-tight sm:text-4xl md:text-[45px]">
          {SubTitle}
        </h2>
        <p className="text-md text-gray-500 !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
