// src/components/ui/Input.tsx
interface InputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label: string;
  textarea?: boolean;
}

export const Input = ({ label, textarea, ...props }: InputProps) => {
  const styles =
    "w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all";

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      {textarea ? (
        <textarea className={styles} rows={4} {...(props)} />
      ) : (
        <input className={styles} {...props} />
      )}
    </div>
  );
};
