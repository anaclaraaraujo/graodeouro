import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { CartProvider } from "./contexts/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Router />
      </BrowserRouter>
      </CartProvider>
        <GlobalStyle />
    </ThemeProvider>
  )
}