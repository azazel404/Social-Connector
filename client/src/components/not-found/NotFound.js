import React from 'react';

//STATEFULL JIKA URL YANG DIMASUKAN SALAH AKAN DILEMPARKAN KE TEMPAT COMPONENT ERROR
export default () => {
  return (
    <div>
      <h1 className="display-4">Page Not Found</h1>
      <p>Sorry, this page does not exist</p>
    </div>
  );
};
