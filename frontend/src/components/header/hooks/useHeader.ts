import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import State from '../../../store/interfaces/state';


export function useHeader(){
    const { user, loading, error } = useSelector((state: State) => state.user);
  const { commitList } = useSelector((state: State) => state.commits);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  

  return {
      user,
      loading,
      error,
      commitList,
      dispatch,
      showModal,
      setShowModal
  }
}
