import React from "react"
import { useImageGrayscale, useImageRotation } from "@/stores/image-store"

export type ImageType = {
  title: string
  src: string
}

export default function MyImage({ image }: { image: ImageType }) {
  const rotation = useImageRotation()
  const grayscale = useImageGrayscale()

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
