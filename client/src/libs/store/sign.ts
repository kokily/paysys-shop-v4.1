import { atom } from 'recoil';

export const husbandSign = atom({
  key: 'husbandSign',
  default: false,
});

export const husbandImage = atom({
  key: 'husbandImage',
  default: '',
});

export const brideSign = atom({
  key: 'brideSign',
  default: false,
});

export const brideImage = atom({
  key: 'brideImage',
  default: '',
});

export const currentImage = atom({
  key: 'currentImage',
  default: '',
});
