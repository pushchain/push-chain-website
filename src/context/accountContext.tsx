import React, { createContext, useState } from 'react';

type AccountContextType = {
  showAlertBar: boolean;
  setShowAlertBar: (val: boolean) => void;
  isHydrated: boolean;
  shouldShowAlertBar: boolean;
};

const AccountContext = createContext<AccountContextType>({
  showAlertBar: true,
  setShowAlertBar: () => {},
  isHydrated: false,
  shouldShowAlertBar: false,
});

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showAlertBar, setShowAlertBarState] = useState<boolean>(true);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [shouldShowAlertBar, setShouldShowAlertBar] = useState<boolean>(false);

  React.useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('showAlertBar');
      const shouldShow = stored === null ? true : stored === 'true';
      setShowAlertBarState(shouldShow);
      setShouldShowAlertBar(shouldShow);
    } else {
      setShouldShowAlertBar(showAlertBar);
    }
  }, [showAlertBar]);

  const setShowAlertBar = (val: boolean) => {
    setShowAlertBarState(val);
    setShouldShowAlertBar(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem('showAlertBar', val.toString());
    }
  };

  return (
    <AccountContext.Provider
      value={{
        showAlertBar,
        setShowAlertBar,
        isHydrated,
        shouldShowAlertBar,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
