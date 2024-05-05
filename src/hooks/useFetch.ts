import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cacheData } from "../dataSlice";
import { Job } from "../types/Job";
export const useFetch = (url: string, requestOptions: any, requestBody: any) => {

    const [data, setData] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.data.filteredItems);
    // console.log(items)
    // console.log(requestBody.offset, 'in useFetch')
    useEffect(() => {
        if (loading) return;
        setLoading(true);
        fetch(url, { ...requestOptions, body: JSON.stringify(requestBody) })
            .then((res) => res.json())
            .then((data) => {
                setData((prev: Job[]) => [...prev, ...data.jdList]);
                dispatch(cacheData(data.jdList));
                setLoading(false);
            });

    }, [url, items, requestBody,]);

    return { data, loading };
};
