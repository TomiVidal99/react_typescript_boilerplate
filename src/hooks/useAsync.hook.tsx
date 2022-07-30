import {AxiosResponse} from 'axios';
import {useEffect} from 'react';

// This hook also avoids trying to execute some code when the call has been cancelled.

const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFunction: Function,
  returnFunction: Function,
  dependencies: any[] = []
) => {
  useEffect( () => {
    let isActive = true;
    asyncFn().then( (result) => {
      if (isActive) successFunction(result.data);
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
};

export default useAsync;
