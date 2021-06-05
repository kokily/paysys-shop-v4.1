import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import {
  currentImage,
  husbandImage,
  husbandSign,
} from '../../../libs/store/sign';
import SignModal from '../../../components/weddings/read/SignModal';
import { useMutation } from '@apollo/react-hooks';
import { ADD_SIGN } from '../../../libs/graphql/sign';

function HusbandSignContainer() {
  const { weddingId }: { weddingId: string } = useParams();
  const [husband, setHusband] = useRecoilState(husbandSign);
  const [husbandImg, setHusbandImg] = useRecoilState(husbandImage);
  const [currentImg] = useRecoilState(currentImage);
  const [AddSign, { client }] = useMutation(ADD_SIGN);

  const dataURItoBlob = (dataURI: string) => {
    // Base64 데이터 디코딩
    const blob = atob(dataURI.split(',')[1]);

    let array: number[] = [];

    for (let i = 0; i < blob.length; i++) {
      array.push(blob.charCodeAt(i));
    }

    const file = new Blob([new Uint8Array(array)], {
      type: 'image/png',
    });

    return file;
  };

  const onUpload = async () => {
    try {
      const file = dataURItoBlob(currentImg);
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(
        process.env.NODE_ENV === 'production'
          ? 'https://paysys.shop/image'
          : 'http://localhost:4000/image',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response) {
        alert('Error');
        return;
      }

      const data = await response.json();

      setHusbandImg(`https://image.paysys.shop/${data.key}`);

      const response2 = await AddSign({
        variables: {
          weddingId,
          sex: 'husband',
          image: `https://image.paysys.shop/${data.key}`,
        },
      });

      if (!response2 || !response2.data) return;

      await client.clearStore();

      setHusband(false);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <SignModal
      visible={husband}
      title="신랑 서명"
      onCancel={() => setHusband(false)}
      onConfirm={onUpload}
    />
  );
}

export default HusbandSignContainer;
