"use client"

import React from "react"
import { useImageGrayscale, useImageRotation } from "@/stores/image-slice"
import Controls from "@/components/global/controls"
import MyImage, { ImageType } from "@/components/global/my-image"

export default function HomePage() {
  const imageSources = {
    one: "https://picsum.photos/150/150?1",
    two: "https://picsum.photos/150/150?2",
    three: "https://picsum.photos/150/150?3",
    four: "https://picsum.photos/150/150?4",
    five: "https://picsum.photos/150/150?5",
  }
  const images: ImageType[] = [
    {
      title: "Image 1",
      src: imageSources.one,
      rotation: useImageRotation(imageSources.one),
      grayscale: useImageGrayscale(imageSources.one),
    },
    {
      title: "Image 2",
      src: imageSources.two,
      rotation: useImageRotation(imageSources.two),
      grayscale: useImageGrayscale(imageSources.two),
    },
    {
      title: "Image 3",
      src: imageSources.three,
      rotation: useImageRotation(imageSources.three),
      grayscale: useImageGrayscale(imageSources.three),
    },
    {
      title: "Image 4",
      src: imageSources.four,
      rotation: useImageRotation(imageSources.four),
      grayscale: useImageGrayscale(imageSources.four),
    },
    {
      title: "Image 5",
      src: imageSources.five,
      rotation: useImageRotation(imageSources.five),
      grayscale: useImageGrayscale(imageSources.five),
    },
  ]

  return (
    <div className="relative mx-auto grid w-fit max-w-full grid-cols-1 gap-5 p-5 transition-transform duration-200">
      <h1 className="text-center">Using global Zustand slice</h1>
      {renderImages(images)}
    </div>
  )
}

function renderImages(images: ImageType[]) {
  return images.map((image) => renderImage(image))
}

function renderImage(image: ImageType) {
  return (
    <div className="flex w-[300px] justify-between" key={image.src}>
      <Controls id={image.src} />
      <MyImage image={image} />
    </div>
  )
}
