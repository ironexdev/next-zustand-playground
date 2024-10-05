import { useImageActions, useImageRotation } from "@/stores/image-store"

export default function RotateButton() {
  const rotation = useImageRotation()
  const nextRotation = rotation ? rotation + 90 : 90
  const { setRotation } = useImageActions()

  return (
    <button
      onClick={() => setRotation(nextRotation)}
      className="block w-[100px] rounded bg-blue-600 py-2 text-white"
    >
      Rotate
    </button>
  )
}
