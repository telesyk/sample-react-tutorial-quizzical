/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from "react";

export default function Answer({ value, className, onClick, isDisabled }) {
  const defaultClass = "rounded border px-2 py-1 text-sm";
  const classes = `${defaultClass} ${className}`;

  return (
    <button
      onClick={onClick}
      type="button"
      className={classes}
      disabled={isDisabled}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
