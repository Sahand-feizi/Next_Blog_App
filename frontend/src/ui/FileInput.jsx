import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

function FileInput({
    labelValue,
    name,
    dir = "rtl",
    onChange,
    isRequired,
    className,
    validationSchema = {},
    ...rest
  }) {
  
    return (
      <>
        <label
          htmlFor="file-upload"
          className={`${className} flex items-center gap-2 p-2 text-secondary-900 
          bg-secondary-300/50 hover:text-secondary-950 hover:bg-secondary-400/50 
          text-sm font-bold rounded-xl transition-all duration-150 cursor-pointer`}
        >
          {labelValue}
          <ArrowUpTrayIcon className="w-5 h-5" />
          <input
            id="file-upload"
            type="file"
            className="sr-only hidden"
            name={name}
            dir={dir}
            onChange={onChange}
            {...rest}
          />
        </label>
      </>
    );
  }
  export default FileInput;
  