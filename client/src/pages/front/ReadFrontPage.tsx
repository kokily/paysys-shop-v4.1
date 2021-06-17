import { BrowserView, MobileView } from 'react-device-detect';
import PageTemplate from '../../components/common/PageTemplate';
import ReadFront from '../../components/fronts/ReadFront';
import ReadFrontMobile from '../../components/fronts/ReadFrontMobile';

function ReadFrontPage() {
  return (
    <>
      <BrowserView>
        <PageTemplate>
          <ReadFront />
        </PageTemplate>
      </BrowserView>

      <MobileView>
        <PageTemplate>
          <ReadFrontMobile />
        </PageTemplate>
      </MobileView>
    </>
  );
}

export default ReadFrontPage;
