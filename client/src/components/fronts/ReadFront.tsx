import styled from 'styled-components';
import oc from 'open-color';
import { media } from '../../libs/styles';
import ReadButton from './common/ReadButton';
import RemoveModal from '../common/RemoveModal';
import ReadHeader from './common/ReadHeader';
import ReadTable from './common/ReadTable';
import ReadTotal from './common/ReadTotal';
import useReadModal from './hooks/useReadModal';
import useReadFront from './hooks/useReadFront';

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhiteBoard = styled.div`
  width: 80%;
  ${media.xsmall} {
    width: 100%;
  }
`;

const Content = styled.div``;

const EtcPane = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    width: 100%;
    color: ${oc.indigo[9]};
    padding: 15px;
    background-color: ${oc.indigo[1]};
    border-color: ${oc.indigo[2]};
    border: 1px solid transparent;
    border-radius: 4px;
  }
`;

function ReadFront() {
  const { modal, onRemoveClick, onCancel, onConfirm } = useReadModal();
  const { front, user, onList, onRemoveReserve, onReserve, onRestore } =
    useReadFront();

  return (
    <>
      <Container>
        {front && user && (
          <WhiteBoard>
            <ReadHeader front={front} />

            <Content>
              <ReadTable front={front} />

              {front.etc !== '' && front.etc !== ' ' && (
                <>
                  <hr />
                  <EtcPane>
                    <span>기타사항 : {front.etc}</span>
                  </EtcPane>
                </>
              )}

              <hr />

              <ReadTotal front={front} />

              <ReadButton
                front={front}
                user={user}
                onRemoveClick={onRemoveClick}
                onRestore={onRestore}
                onList={onList}
                onReserve={onReserve}
                onRemoveReserve={onRemoveReserve}
              />
            </Content>
          </WhiteBoard>
        )}

        <RemoveModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Container>
    </>
  );
}

export default ReadFront;
