import SkeletonLoader from "./skeletonLoader";

const SendButton = ({ type, onClick, isLoading, buttonText, className }) => {
  return (
    <>
    <button type={type} onClick={onClick} className={className}>
      {isLoading ? <SkeletonLoader loaderColor={`text-white`}/> : buttonText}
    </button>
    </>
  );
};

export default SendButton;
