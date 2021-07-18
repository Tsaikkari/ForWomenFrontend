import Routes from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'
import useLogin from './hooks/useLogin'

const App = () => {
  useLogin()
  
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
