export declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stack-space": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement> & {
          space?: "8" | "12" | "20" | "32" | "64"
        },
        HTMLDivElement
      >
      "flex-box": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement> & { wrap?: boolean },
        HTMLDivElement
      >
      "grid-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >
    }
  }
}
