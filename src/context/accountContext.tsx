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
  const [showAlertBar, setShowAlertBarState] = useState<boolean>(true);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('showAlertBar');
      const shouldShow = stored === null ? true : stored === 'true';
      setShowAlertBarState(shouldShow);
    }
  }, []);

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
