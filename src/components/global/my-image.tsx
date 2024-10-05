import React from "react"
import { useImageGrayscale, useImageRotation } from "@/stores/image-slice"

export type ImageType = {
  title: string
  src: string
}

export default function MyImage({ image }: { image: ImageType }) {
  const rotation = useImageRotation(image.src)
  const grayscale = useImageGrayscale(image.src)

  return (
    <img
      style={{
        transform: `rotate(${rotation}deg)`,
        filter: grayscale ? "grayscale(100%)" : "none",
      }}
      className="block"
      src={image.src}
      alt={image.title}
      title={image.title}
    />
  )
}
