import React from 'react';


const AppLayout = ({ children }) => {
  return (
    <section className="col-flex cross-center">
        {children}
    </section>
  );
}

export default AppLayout;
