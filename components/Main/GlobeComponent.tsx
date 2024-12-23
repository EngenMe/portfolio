import Globe from "../ui/globe";

const GlobeComponent = () => {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-40 pb-40 pt-80 md:pb-60">
      <Globe className="top-2 scale-75 md:scale-100" />
      <div className="pointer-events-none absolute inset-0 h-full" />
    </div>
  );
};
export default GlobeComponent;
