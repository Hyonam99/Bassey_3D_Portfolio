import type { BallCanvasProps } from "../../types";

const BallCanvas = ({ icon, name }: BallCanvasProps) => {
  return (
    <div className="rounded-full bg-white-100 w-16 h-16 flex justify-center items-center">
      <img
        src={icon}
        alt={name}
        className="w-[80%] h-[80%] rounded-full"
      />
    </div>
  );
};

export default BallCanvas;
