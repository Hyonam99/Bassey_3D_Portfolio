// eslint-disable-next-line react/prop-types
const BallCanvas = ({ icon }) => {
  return (
    <div className="rounded-full bg-white-100 w-16 h-16 flex justify-center items-center">
      <img
        src={icon}
        alt="stack-icon"
        className="w-[80%] h-[80%] rounded-full"
      />
    </div>
  );
};

export default BallCanvas;
