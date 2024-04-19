// options
export const STATUS_OPTIONS = ["active", "completed"] as const;
export const FILTER_OPTIONS = ["all", ...STATUS_OPTIONS] as const;

// breakpoints
export const MOBILE_BREAKPOINT = 376 as const;

// sizes
export const MOBILE_SIZE = "327px";
export const DESKTOP_SIZE = "576px";
