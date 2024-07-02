export type TemplateTheme =
  | "minimal"
  | "gradient"
  | "dark"
  | "corporate"
  | "neo-brutal";

export type AiComponentProps = {
  theme?: TemplateTheme;
  variables?: Record<string, string>;
};
