import React, { createContext, useState, useEffect } from 'react';

type AccountContextType = {
  showAlertBar: boolean;
  setShowAlertBar: (val: boolean) => void;
  isHydrated: boolean;
  shouldShowAlertBar: boolean;
  delayedShowAlertBar: boolean;
};

const AccountContext = createContext<AccountContextType>({
  showAlertBar: false,
  setShowAlertBar: () => {},
  isHydrated: false,
  shouldShowAlertBar: false,
  delayedShowAlertBar: false,
});

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showAlertBar, setShowAlertBarState] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [shouldShowAlertBar, setShouldShowAlertBar] = useState<boolean>(false);
  const [delayedShowAlertBar, setDelayedShowAlertBar] =
    useState<boolean>(false);
  const [wasEverVisible, setWasEverVisible] = useState<boolean>(false);

  // The alert bar itself has been removed, so this stays off. It is still
  // threaded through the tree because the header and page wrapper offset
  // themselves by its height, and a stored `true` from a previous visit would
  // otherwise leave an 80px gap above the header with nothing in it.
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (shouldShowAlertBar) {
      setDelayedShowAlertBar(true);
      setWasEverVisible(true);
    } else if (wasEverVisible) {
      const timer = setTimeout(() => {
        setDelayedShowAlertBar(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [shouldShowAlertBar, wasEverVisible]);

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
        delayedShowAlertBar,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
