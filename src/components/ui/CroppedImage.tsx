import Image from "next/image";
import type { ImageFocus } from "@/data/menu";

type CroppedImageProps = {
  src: string;
  alt: string;
  sizes: string;
  focus?: ImageFocus;
  className?: string;
  preload?: boolean;
};

/**
 * Fills its parent (which must be `relative overflow-hidden`).
 * `focus` lets one photo be cropped to show just one part, so a single image can serve two dishes.
 */
export default function CroppedImage({ src, alt, sizes, focus, className = "", preload }: CroppedImageProps) {
  const style = focus
    ? {
        objectPosition: `${focus.x}% ${focus.y}%`,
        transformOrigin: `${focus.x}% ${focus.y}%`,
        transform: focus.zoom ? `scale(${focus.zoom})` : undefined,
      }
    : undefined;
  return <Image src={src} alt={alt} fill sizes={sizes} preload={preload} style={style} className={`object-cover ${className}`} />;
}
