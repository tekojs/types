export interface RenderContext {
  state: Record<string, unknown>;
  slots?: Record<string, string>;
}

export interface RenderOptions {
  resolveComponent?: (name: string) => Promise<string | null>;
  renderTemplate?: (
    source: string,
    state: Record<string, unknown>,
    slots?: Record<string, string>
  ) => Promise<string>;
}
