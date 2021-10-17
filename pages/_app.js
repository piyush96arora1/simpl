import React from "react";
import BottomNav from "../components/BottomNav";
import "../styles.css";

const MainHandler = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <div className="scale">
      <Component {...pageProps} />
      <footer>
        <BottomNav />
      </footer>
      </div>
      <style jsx>{`
     
        .scale{
          max-width:700px;
          margin: 0 auto;
        }
        footer {
          width: 100%;
          max-width: inherit;
          height: 56px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          bottom: 0;
        }
       
      `}</style>
    </React.Fragment>
  );
};
export default MainHandler;
