"use client"

import React from "react"
import MyImage, { ImageType } from "@/components/scoped/my-image"
import Controls from "@/components/scoped/controls"
import { ImageStoreProvider } from "@/components/providers/image-store-provider"

export default function WithContextPage() {
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
    },
    {
      title: "Image 2",
      src: imageSources.two,
    },
    {
      title: "Image 3",
      src: imageSources.three,
    },
    {
      title: "Image 4",
      src: imageSources.four,
    },
    {
      title: "Image 5",
      src: imageSources.five,
    },
  ]

  return (
    <div className="relative mx-auto grid w-fit max-w-full grid-cols-1 gap-5 p-5 transition-transform duration-200">
      <h1 className="text-center">Using scoped Zustand store</h1>
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
      <ImageStoreProvider>
        <Controls />
        <MyImage image={image} />
      </ImageStoreProvider>
    </div>
  )
}
