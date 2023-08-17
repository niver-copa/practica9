// NavLogic.js
import { useState } from 'react';

const useNavLogic = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  const openUserProfile = () => {
    setShowUserProfile(true);
  };

  const closeUserProfile = () => {
    setShowUserProfile(false);
  };

  return {
    isExpanded,
    showUserProfile,
    toggleNav,
    openUserProfile,
    closeUserProfile,
  };
};

export default useNavLogic;
