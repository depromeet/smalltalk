import { useState } from 'react';

 export default function useRequest(promiseCreator){
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [data, setData] = useState(null);
   const onRequest = async (...params) => { 

     try {
       setLoading(true);
       const response = await promiseCreator(...params);
       setData(response.data);
     } catch (e) {
       setError(e);
     }
    setLoading(false);
   }

   return [onRequest, loading, data, error]; // 1)
 }