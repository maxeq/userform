type TextFieldProps = {
  name: string;
  id: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
};

export function TextField({
  name,
  id,
  autoComplete = '',
  placeholder = '',
  className = '',
}: TextFieldProps) {
  return (
    <div className="relative rounded-lg shadow-sm">
      <div className="mt-2">
        <input
          type="text"
          name={name}
          id={id}
          autoComplete={autoComplete}
          className={`block w-full pt-3 pb-3 rounded-lg border-0 py-1.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
