import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center border-b border-slate-800 pb-8 mb-6">
          <p className="text-xs leading-normal mb-4 max-w-md">
            Providing secure, guaranteed rental income for landlords while delivering essential social housing across the UK.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs">
          <p>&copy; {new Date().getFullYear()} The Access Pathway Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Registered in England & Wales.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;