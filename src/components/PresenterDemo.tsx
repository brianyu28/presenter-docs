import {
  BrowserCanvasRenderer,
  Color,
  Presentation,
  type Slide as PresenterSlide,
} from "presenter";
import { usePrismTheme } from "@docusaurus/theme-common";
import { Highlight } from "prism-react-renderer";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./PresenterDemo.module.css";

interface PresenterDemoProps {
  readonly slide?: PresenterSlide;
  readonly backgroundColor?: Color;
  readonly images?: Readonly<Record<string, string>>;
  readonly code?: string;
  readonly showControls?: boolean;
  readonly slideWidthPercent?: number;
  readonly slideMaxWidth?: number;
  readonly codeHeight?: string;
}

const DEFAULT_BACKGROUND_COLOR = Color("#1c1c1c");
const NO_IMAGES: Readonly<Record<string, string>> = {};

export default function PresenterDemo({
  slide,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  images = NO_IMAGES,
  code,
  showControls = false,
  slideWidthPercent = 50,
  slideMaxWidth = 800,
  codeHeight,
}: PresenterDemoProps): ReactNode {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<BrowserCanvasRenderer | null>(null);
  const [canGoNext, setCanGoNext] = useState(false);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const hasSlide = slide !== undefined;
  const hasCode = code !== undefined;

  const presentation = useMemo(
    () =>
      slide === undefined
        ? null
        : Presentation({
            title: slide.title || "Presenter.js",
            backgroundColor,
            slides: [slide],
            resources: { images: { ...images } },
          }),
    [backgroundColor, images, slide],
  );

  const updateControlState = useCallback(() => {
    const renderer = rendererRef.current;
    setCanGoNext(renderer?.hasNext() ?? false);
    setCanGoPrevious(renderer?.hasPrevious() ?? false);
  }, []);

  const updateControlStateSoon = useCallback(() => {
    updateControlState();
    requestAnimationFrame(updateControlState);
  }, [updateControlState]);

  useEffect(() => {
    const host = hostRef.current;
    if (host === null || presentation === null) {
      rendererRef.current = null;
      setCanGoNext(false);
      setCanGoPrevious(false);
      return;
    }

    const renderer = new BrowserCanvasRenderer({
      // Don't cache presentation state, since multiple presentations share same title
      cacheDurationMinutes: 0,
      element: host,
      presentation,
    });
    rendererRef.current = renderer;
    void renderer.present().then(updateControlState);

    return () => {
      if (rendererRef.current === renderer) {
        rendererRef.current = null;
      }
      host.replaceChildren();
    };
  }, [presentation, updateControlState]);

  if (!hasSlide && !hasCode) {
    return null;
  }

  const slideStyle = {
    "--presenter-demo-slide-width": `${slideWidthPercent}%`,
    "--presenter-demo-slide-max-width": `${slideMaxWidth}px`,
  } as CSSProperties;

  return (
    <div className={styles.demo} style={slideStyle}>
      {hasSlide && (
        <div className={hasCode ? styles.slideColumn : styles.slideOnly}>
          <div className={styles.slideFrame} ref={hostRef} />
          {showControls && (
            <div className={styles.controls} aria-label="Presentation controls">
              <ControlButton
                label="Reset"
                disabled={!canGoPrevious}
                onClick={() => {
                  rendererRef.current?.renderSlide(0);
                  updateControlStateSoon();
                }}
              >
                <ResetIcon />
              </ControlButton>
              <ControlButton
                label="Previous"
                disabled={!canGoPrevious}
                onClick={() => {
                  rendererRef.current?.previous();
                  updateControlStateSoon();
                }}
              >
                <PreviousIcon />
              </ControlButton>
              <ControlButton
                label="Next"
                disabled={!canGoNext}
                onClick={() => {
                  rendererRef.current?.next();
                  updateControlStateSoon();
                }}
              >
                <NextIcon />
              </ControlButton>
            </div>
          )}
        </div>
      )}
      {hasCode && (
        <CodeBlock
          code={code}
          height={codeHeight}
          isPairedWithSlide={hasSlide}
        />
      )}
    </div>
  );
}

function CodeBlock({
  code,
  height,
  isPairedWithSlide,
}: {
  readonly code: string;
  readonly height?: string;
  readonly isPairedWithSlide: boolean;
}): ReactNode {
  const prismTheme = usePrismTheme();

  return (
    <Highlight code={code.trim()} language="tsx" theme={prismTheme}>
      {({ className, getLineProps, getTokenProps, style, tokens }) => (
        <pre
          className={`${className} ${
            isPairedWithSlide ? styles.codeColumn : styles.codeOnly
          }`}
          style={{
            ...style,
            height,
          }}
        >
          <code>
            {tokens.map((line, lineIndex) => {
              const lineProps = getLineProps({ line });

              return (
                <span
                  key={lineIndex}
                  {...lineProps}
                  className={`${lineProps.className ?? ""} ${styles.codeLine}`}
                >
                  {line.map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                </span>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
}

function ControlButton({
  children,
  disabled,
  label,
  onClick,
}: {
  readonly children: ReactNode;
  readonly disabled: boolean;
  readonly label: string;
  readonly onClick: () => void;
}): ReactNode {
  return (
    <button
      className={styles.controlButton}
      disabled={disabled}
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ResetIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5v6h6" />
      <path d="M5.5 9.5A7 7 0 1 1 7 18.3" />
    </svg>
  );
}

function PreviousIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function NextIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
