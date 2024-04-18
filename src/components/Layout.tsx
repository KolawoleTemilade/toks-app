
import Header from "../components/Header";



interface ILayoutProps {
  children: React.ReactNode;
    
}

const Layout: React.FunctionComponent<ILayoutProps> = ({children}) => {
  return(
    <>
    <Header/>
{children}


    </>
  ) ;
};

export default Layout;
