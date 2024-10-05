import React from "react"

export type ImageType = {
  title: string
  src: string
  rotation: number | undefined
  grayscale: boolean | undefined
}

export default function MyImage({ image }: { image: ImageType }) {
  return (
    <img
      style={{
        transform: `rotate(${image.rotation}deg)`,
        filter: image.grayscale ? "grayscale(100%)" : "none",
      }}
      className="block"
      src={image.src}
      alt={image.title}
      title={image.title}
    />
  )
}
