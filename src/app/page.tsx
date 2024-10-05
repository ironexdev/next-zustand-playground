"use client"

import React from "react"
import Controls from "@/components/global/controls"
import MyImage, { ImageType } from "@/components/global/my-image"

export default function HomePage() {
  const images: ImageType[] = [
    {
      title: "Image 1",
      src: "https://picsum.photos/150/150?1",
    },
    {
      title: "Image 2",
      src: "https://picsum.photos/150/150?2",
    },
    {
      title: "Image 3",
      src: "https://picsum.photos/150/150?3",
    },
    {
      title: "Image 4",
      src: "https://picsum.photos/150/150?4",
    },
    {
      title: "Image 5",
      src: "https://picsum.photos/150/150?5",
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
