import create from '../Services/create';
import update from '../Services/update';
import { getProps } from '../props';

export default async (values, dispatch) => {
  
  const { clientId, onClose, didCreate, didUpdate } = getProps();
  
  if (!clientId) {

    const isCreated = await dispatch(create(values));

    if (isCreated) {

      onClose();
      didCreate();
      
    }
  } else {

    const isUpdated = await dispatch(update(values));

    if (isUpdated) {

      onClose();
      didUpdate();

    }
  }

};
