// 2nd highest level in component tree
import { useState } from 'react';
import type { NextPage } from 'next';

import Homepage from '../components/modern/homepage';
import LegacyHomepage from '../components/legacy/homepage';
import Toggle from '../components/modern/toggle';

const Index: NextPage = () => {
  const [isToggleOn, setToggleOn] = useState(false);
  const handleToggle = () => {
    setToggleOn(!isToggleOn);
  };
  return (
    <>
      <Toggle isToggled={isToggleOn} onToggle={handleToggle} />
      {/* new version */}
      {true && <Homepage />}
      {/* legacy version */}
      {true && <LegacyHomepage />}
    </>
  );
};

export default Index;
