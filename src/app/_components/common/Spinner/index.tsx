import { FC, HTMLProps } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

interface SpinnerProps extends HTMLProps<HTMLSpanElement> {}

const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <span className={`inline-flex animate-spin ${className ?? ""}`}>
      <ArrowPathIcon className="w-6 h-6" />
    </span>
  );
};

export default Spinner;
