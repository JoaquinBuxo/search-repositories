import { useContext } from 'react';
import { RepositoryContext } from '../context/RepositoryContext';

export const useContextRepository = () => {
  return useContext(RepositoryContext);
};
