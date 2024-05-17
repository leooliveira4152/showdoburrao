import { Theme, useTheme } from "@mui/material";
import { CSSProperties } from "react";

export default function useStyles<T>(
  styles: (theme: Theme) => { [P in keyof T]: CSSProperties }
) {
  const theme = useTheme();
  return styles(theme);
}
