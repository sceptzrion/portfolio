import Image from "next/image";
import type {
  ReactNode,
} from "react";

type IPhone12ProMockupProps = {
  src?: string;
  alt: string;
  sizes?: string;
  className?: string;
  children?: ReactNode;
};

export default function IPhone12ProMockup({
  src,
  alt,
  sizes = "270px",
  className = "",
  children,
}: IPhone12ProMockupProps) {
  return (
    <div
      className={
        "relative aspect-390/844 " +
        className
      }
    >
      {/* Left-side controls */}
      <span
        aria-hidden="true"
        className="absolute -left-0.75 top-[20%] h-7 w-0.75 rounded-l-sm bg-[#77736e]"
      />

      <span
        aria-hidden="true"
        className="absolute -left-0.75 top-[27%] h-12 w-0.75 rounded-l-sm bg-[#77736e]"
      />

      <span
        aria-hidden="true"
        className="absolute -left-0.75 top-[35%] h-12 w-0.75 rounded-l-sm bg-[#77736e]"
      />

      {/* Right-side control */}
      <span
        aria-hidden="true"
        className="absolute -right-0.75 top-[29%] h-16 w-0.75 rounded-r-sm bg-[#77736e]"
      />

      {/* Metallic outer edge */}
      <div className="absolute inset-0 rounded-[30px] border border-black/25 bg-[#9b9893] p-0.5 shadow-[0_28px_65px_rgb(0_0_0/0.24)] transition-transform duration-700 group-hover:-translate-y-1">
        {/* Black device bezel */}
        <div className="relative h-full overflow-hidden rounded-[27px] bg-[#09090a] p-1.25">
          {/* Display */}
          <div className="relative h-full overflow-hidden rounded-[23px] bg-white">
            {src ? (
              <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className="object-contain object-center"
              />
            ) : (
              children
            )}

            {/* iPhone 12 Pro-style notch */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 z-20 h-5.5 w-[43%] -translate-x-1/2 rounded-b-[12px] bg-[#09090a]"
            >
              <span className="absolute left-1/2 top-1.75 h-1 w-10 -translate-x-1/2 rounded-full bg-white/15" />

              <span className="absolute right-3.25 top-1.5 size-1.5 rounded-full bg-[#172338] ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
