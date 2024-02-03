import React, { Fragment, useMemo } from "react";
import { RE_DIGIT } from "./constants";
import { classNamesCustom } from "@/utils/classes";

export type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
  type?: string;
};

export default function OTPInputs({
  value,
  valueLength,
  onChange,
  type,
}: Props) {
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      const nextElementSibling: HTMLElement | null = document.querySelector(
        `input[tabindex="${idx + 1}"]`
      ); /* target.nextElementSibling as HTMLInputElement | null; */

      if (nextElementSibling) {
        nextElementSibling.focus();
      }
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }

    if (!RE_DIGIT.test(targetValue)) {
      return;
    }

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);

    onChange(newValue);

    if (!isTargetValueDigit) {
      return;
    }

    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    const previousElementSibling: HTMLElement | null = document.querySelector(
      `input[tabindex="${idx - 1}"]`
    ); /* target.nextElementSibling as HTMLInputElement | null; */

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <div className="otp-group py-[20px] w-full items-center justify-center flex gap-x-[16px] ">
      {valueItems.map((digit, idx) => (
        <Fragment key={idx}>
          <input
            tabIndex={idx}
            key={idx}
            type="password"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={valueLength}
            className={classNamesCustom(
              `otp-input text-center focus:ring-teal-secondary-dark mt-1 block h-[79px] w-full rounded-[8px] bg-bg-questions text-[44px] outline-none transition focus:ring-2 focus:ring-yellow-aura-accent bg-otpback border border-border-otp`,
              { "border-yellow-aura-accent": digit }
            )}
            value={digit}
            onKeyDown={(e) => inputOnKeyDown(e, idx)}
            onChange={(e) => inputOnChange(e, idx)}
            onFocus={inputOnFocus}
            placeholder={
              type === "age"
                ? idx == 0 || idx == 1
                  ? "D"
                  : idx == 2 || idx == 3
                  ? "M"
                  : idx > 3
                  ? "Y"
                  : ""
                : ""
            }
          />
          {type === "age" && (idx == 1 || idx == 3) && (
            <div className="h-[3px] w-[22px] bg-black"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
