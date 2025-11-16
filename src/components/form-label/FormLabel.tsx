import { ZodNullable, ZodOptional } from "zod";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  schema: any;      // Zod schema.shape
  name: string;     // field name
  children: React.ReactNode;
}

const isRequired = (schemaField: any) =>
  !(schemaField instanceof ZodOptional || schemaField instanceof ZodNullable);

export  default function FormLabel({ schema, name, children, ...props }: FormLabelProps) {
  const required = schema?.[name] && isRequired(schema[name]);

  return (
    <label {...props} className="text-sm font-medium text-gray-700">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}
