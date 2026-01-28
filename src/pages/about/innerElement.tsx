import { useWindowSize } from "./useWindowSize";

const InnerElement = ({ count }: { count: number }) => {
  const { width, height } = useWindowSize(count);
  return (
    <div className="text-white">
      <p>Count: {count}</p>
      <p>height: {height}</p>
      <p>width: {width}</p>
    </div>
  );
};

export default InnerElement;
