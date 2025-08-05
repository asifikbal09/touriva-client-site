
import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hooks";
import type { RootState } from "./redux/store";
import { ThemeProvider } from "./theme/ThemeProvider";

const App =()=>{
  const theme = useAppSelector((state:RootState)=> state.theme.theme)
  console.log(theme)
  return (
    <>
      <ThemeProvider defaultTheme={theme}>
        <MainLayout  />
      </ThemeProvider>
    </>
  );
}

export default App;
