import { useImageActions, useImageGrayscale } from "@/stores/image-store"

export default function GrayscaleButton() {
  const grayscale = useImageGrayscale()
  const nextGrayscale = !grayscale
  const { setGrayscale } = useImageActions()

  return (
    <button
      onClick={() => setGrayscale(nextGrayscale)}
      className="block w-[100px] rounded bg-gray-600 py-2 text-white"
    >
      Grayscale
    </button>
  )
}
