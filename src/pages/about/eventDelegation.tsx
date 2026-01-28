const EventDelegation = () => {
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleParentCapture = (e: MouseEvent) => {
    // e.stopPropagation();
    console.log("Parent CAPTURED");
  };

  const handleChildClick = (e) => {
    // e.stopPropagation();
    console.log("Child clicked");
  };

  return (
    <div
      onClick={handleParentClick}
      onClickCapture={handleParentCapture}
      className="max-w-7xl mx-auto px-6 py-30 flex justify-between bg-yellow-300 "
    >
      <button
        onClick={handleChildClick}
        className="text-white font-medium bg-gray-400 p-2 rounded-lg"
      >
        Child
      </button>
    </div>
  );
};

export default EventDelegation;
