import create from '../Services/create';

export default async (values, dispatch) => {
  
  await dispatch(create(values));
};
