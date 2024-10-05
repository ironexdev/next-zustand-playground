import RotateButton from "@/components/scoped/rotate-button"
import GrayscaleButton from "@/components/scoped/grayscale-button"

export default function Controls() {
  return (
    <div className="flex flex-col justify-around">
      <RotateButton />
      <GrayscaleButton />
    </div>
  )
}
