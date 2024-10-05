import RotateButton from "@/components/global/rotate-button"
import GrayscaleButton from "@/components/global/grayscale-button"

export default function Controls({ id }: { id: string }) {
  return (
    <div className="flex flex-col justify-around">
      <RotateButton id={id} />
      <GrayscaleButton id={id} />
    </div>
  )
}
