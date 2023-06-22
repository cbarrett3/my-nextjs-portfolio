import type { NextPage } from 'next';
import Homepage from '../components/modern/homepage';
import LegacyHomepage from '../components/legacy/homepage';
const Index: NextPage = () => {
  return (
    <>
      {/* new version */}
      {false && <Homepage />}
      {/* legacy version */}
      {true && <LegacyHomepage />}
    </>
  );
};

export default Index;
