import { useImageActions, useImageRotation } from "@/stores/image-slice"

export default function RotateButton({ id }: { id: string }) {
  const rotation = useImageRotation(id)
  const nextRotation = rotation ? rotation + 90 : 90
  const { setRotation } = useImageActions(id)

  return (
    <button
      onClick={() => setRotation(nextRotation)}
      className="block w-[100px] rounded bg-blue-600 py-2 text-white"
    >
      Rotate
    </button>
  )
}
