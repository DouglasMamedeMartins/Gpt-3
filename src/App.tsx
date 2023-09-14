import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { HeaderMain } from './components/HeaderMain'
import { Wrapper } from './appstyles'
import { Whatisgpt } from './components/Whatisgpt'
import { Feature } from './components/Feature'
import { Cta } from './components/Cta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Wrapper>
        <Header />
        <HeaderMain />
        <Whatisgpt />
        <Feature />
        <Cta />
        <Blog />
        <GlobalStyles />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  )
}

export default App
