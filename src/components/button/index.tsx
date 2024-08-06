import "@/app/styles/scss/components/button.scss";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  variant?: "primary" | "success" | "outline-primary" | "outline-success";
};
const Button = (
  props: PropsWithChildren<TButton> = {
    variant: "primary",
  }
) => {
  const { children, variant, label } = props;
  return (
    <button {...props} className={`btn btn-${variant} ${props.className}`}>
      {children ? children : label}
    </button>
  );
};

export default Button;
