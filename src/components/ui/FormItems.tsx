import type {
  HTMLAttributes,
  PropsWithChildren,
  LabelHTMLAttributes,
} from 'react';
import cn from 'clsx';

const FormItem = ({
  children,
  className = '',
  asFieldset = false,
  ...props
}: PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    asFieldset?: boolean;
  }
>) => {
  const Component = asFieldset ? 'fieldset' : 'div';
  return (
    <Component
      {...props}
      className={cn('w-full flex flex-col gap-1', className)}
    >
      {children}
    </Component>
  );
};

const FormItemLabel = ({
  children,
  className = '',
  htmlFor,
  ...props
}: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) => (
  <label
    htmlFor={htmlFor}
    {...props}
    className={cn('block font-medium mb-1', className)}
  >
    {children}
  </label>
);

const FormItemContent = ({
  children,
  className = '',
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div {...props} className={cn('flex items-center', className)}>
    {children}
  </div>
);

const FormItemError = ({
  children,
  className = '',
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <span
    role="alert"
    {...props}
    className={cn('text-red-500 text-xs mt-1', className)}
  >
    {children}
  </span>
);

export { FormItem, FormItemLabel, FormItemContent, FormItemError };
