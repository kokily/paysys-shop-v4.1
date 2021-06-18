import { BrowserView, MobileView } from 'react-device-detect';
import PageTemplate from '../../components/common/PageTemplate';
import ReadWeddingTemplate from '../../components/weddings/read/common/ReadWeddingTemplate';
import ReadWedding from '../../components/weddings/read';
import LeftSide from '../../components/weddings/read/common/left';
import RightSide from '../../components/weddings/read/common/right';
import ReadMobileTemplate from '../../components/weddings/read/common/ReadMobileTemplate';
import ReadMobileWedding from '../../components/weddings/read/mobile';
import TopMobile from '../../components/weddings/read/mobile/TopMobile';
import BottomMobile from '../../components/weddings/read/mobile/BottomMobile';

function ReadWeddingPage() {
  return (
    <PageTemplate>
      <BrowserView>
        <ReadWeddingTemplate>
          <ReadWedding />
          <LeftSide />
          <RightSide />
        </ReadWeddingTemplate>
      </BrowserView>

      <MobileView>
        <ReadMobileTemplate>
          <ReadMobileWedding />
          <TopMobile />
          <BottomMobile />
        </ReadMobileTemplate>
      </MobileView>
    </PageTemplate>
  );
}

export default ReadWeddingPage;
