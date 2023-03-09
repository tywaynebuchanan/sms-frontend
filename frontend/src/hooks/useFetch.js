import axios from 'axios'
import {api} from "../api/api"
import {useState,useEffect} from 'react'

export const useFetch = (url)=>{

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try{
            const data = await api.get(url)
            if(data.data.student){
              setData(data.data.student)
            }else{
              setData([])
            }
            }catch(error){
              setError(error.response.data.message)
            }
            setLoading(false)
          }
       fetchData();

    },[url])

    const reFetch = async () => {
        setLoading(true);
        try {
          const res = await axios.get(url);
          setData(res.data);
        } catch (error) {
          setError(error);
        }
        setLoading(false);
      };
    
      return { data, loading, error};
};
  
    
    export default useFetch;

