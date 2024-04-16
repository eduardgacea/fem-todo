// options
export const STATUS_OPTIONS = ["active", "completed"] as const;
export const FILTER_OPTIONS = ["all", ...STATUS_OPTIONS] as const;

// breakpoints
export const MOBILE_BREAKPOINT = 375 as const;
