import { VelocityScroll } from "./ui/velocityScroll";

const ScrollBasedVelocity = () => {
  return (
    <div className="mt-8">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll className="py-8 text-gray-100 text-5xl">
          Bikin Website Cepat, Mudah, & Terjangkau!
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
};

export default ScrollBasedVelocity;
