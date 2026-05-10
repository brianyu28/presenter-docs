import clsx from "clsx";
import { useState, type ReactNode } from "react";

import styles from "./CommandBlock.module.css";

type CommandBlockProps = {
  command: string;
};

function ClipboardIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      className={styles.copyIcon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M8 7.5V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        width="11"
        x="5"
        y="7"
      />
    </svg>
  );
}

function CheckIcon(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      className={styles.copyIcon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m5 12 4.5 4.5L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export default function CommandBlock({ command }: CommandBlockProps): ReactNode {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.commandBlock}>
      <code>{command}</code>
      <button
        aria-label={`Copy ${command} command`}
        className={clsx(styles.copyButton, copied && styles.copyButtonCopied)}
        onClick={handleCopy}
        title={copied ? "Copied" : "Copy"}
        type="button"
      >
        {copied ? <CheckIcon /> : <ClipboardIcon />}
      </button>
      <span aria-live="polite" className={styles.copyStatus}>
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}
