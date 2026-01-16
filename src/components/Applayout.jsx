import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
export const Applayout =()=> {
  const navigation = useNavigation();
  if(navigation.state === "loading") return <Loading/>
    return(
      <>    
      <Header/>
      <Outlet/>
      <Footer/>
      </>  
    );
};  