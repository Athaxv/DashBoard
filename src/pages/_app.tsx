import { useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { SessionProvider } from "next-auth/react";
import ThemeToggleButton from "@/components/ThemeToggleButton";
// import lightTheme from "@/theme/lightTheme";
// import darkTheme from "@/theme/darktheme";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Dynamic theme creation based on the mode
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <CssBaseline />
        <Component {...pageProps} />
        <ThemeToggleButton mode={mode} setMode={setMode}/>
      </SessionProvider>
    </ThemeProvider>
  );
}
