import Input, { type TInputProps } from "./index";

type TInputLabelProps = TInputProps & {
  label: string;
  error?: boolean;
  errorMsg?: string;
};

const InputLabel = (props: TInputLabelProps) => {
  const { label, id, className, error, errorMsg } = props;
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <Input {...props} className={`mt-1`} />
      {error && <small className='invalid-text'>{errorMsg}</small>}
    </div>
  );
};

export default InputLabel;
