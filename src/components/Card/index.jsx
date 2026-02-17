import React from "react";
import clsx from "clsx";

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl border border-gray-200 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div className={clsx("flex flex-col gap-1.5 p-6", className)} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3
      className={clsx(
        "text-lg font-semibold text-primary-text leading-snug",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({ className, children, ...props }) => {
  return (
    <p className={clsx("text-sm text-gray-500", className)} {...props}>
      {children}
    </p>
  );
};

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={clsx("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ className, children, ...props }) => {
  return (
    <div className={clsx("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};