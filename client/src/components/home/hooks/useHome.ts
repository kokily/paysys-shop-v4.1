import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { menu } from '../../../libs/menu';

function useHome() {
  const history = useHistory();
  const [native] = useState(history.location.pathname.substring(1));

  const onMenu = (divide: string) => {
    let menu = '';

    if (native === 'soldier') {
      menu = '현역';
    } else if (native === 'reserve') {
      menu = '예비역';
    } else if (native === 'general') {
      menu = '일반';
    }

    history.push(`/menu?native=${menu}&divide=${divide}`);
  };

  return {
    menu,
    native,
    onMenu,
  };
}

export default useHome;
