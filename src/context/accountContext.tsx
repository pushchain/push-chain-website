import React, { createContext, useState } from 'react';

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
  const [showAlertBar, setShowAlertBarState] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('showAlertBar');
    return stored === null ? true : stored === 'true';
  });

  const setShowAlertBar = (val: boolean) => {
    setShowAlertBarState(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem('showAlertBar', val.toString());
    }
  };

  return (
    <AccountContext.Provider value={{ showAlertBar, setShowAlertBar }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
