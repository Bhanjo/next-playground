import useSWRImmutable from 'swr/immutable';
import axios from 'axios';

const useUserFind = (url: string) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    userInfo: data,
    isLoading: !error && !data,
    error: error,
  };
};

export default useUserFind;
