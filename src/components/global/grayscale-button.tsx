import { useImageActions, useImageGrayscale } from "@/stores/image-slice"

export default function GrayscaleButton({ id }: { id: string }) {
  const grayscale = useImageGrayscale(id)
  const nextGrayscale = !grayscale
  const { setGrayscale } = useImageActions(id)

  return (
    <button
      onClick={() => setGrayscale(nextGrayscale)}
      className="block w-[100px] rounded bg-gray-600 py-2 text-white"
    >
      Grayscale
    </button>
  )
}
