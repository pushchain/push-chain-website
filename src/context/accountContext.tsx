import React, { createContext, useEffect, useState } from 'react';

type AccountContextType = {
  showAlertBar: boolean;
  setShowAlertBar: (val: boolean) => void;
};

const AccountContext = createContext<AccountContextType>({
  showAlertBar: true,
  setShowAlertBar: () => {},
});

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showAlertBar, setShowAlertBarState] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('showAlertBar');
    if (stored === 'false') {
      setShowAlertBarState(false);
    }
  }, []);

  const setShowAlertBar = (val: boolean) => {
    setShowAlertBarState(val);
    localStorage.setItem('showAlertBar', String(val));
  };

  return (
    <AccountContext.Provider value={{ showAlertBar, setShowAlertBar }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
