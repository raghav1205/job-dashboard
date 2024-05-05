import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cacheData } from "../dataSlice";

export const useFetch = (url: string, requestOptions: any, requestBody: any) => {

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.data.filteredItems);
    console.log(items)

    useEffect(() => {
        if (items.length === 0) {
            fetch(url, { ...requestOptions, body: JSON.stringify(requestBody) })
                .then((res) => res.json())
                .then((data) => {
                    setData(data.jdList);
                    dispatch(cacheData(data.jdList));
                    setLoading(false); 
                });
        }
        else{
            setData(items);
            setLoading(false); 
        }
    }, [url,items]);

    return { data, loading };
};
