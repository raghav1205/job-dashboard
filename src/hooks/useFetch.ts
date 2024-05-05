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
const jobsArray = [
    {
        jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany: "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 61,
        minJdSalary: null,
        salaryCurrencyCode: "USD",
        location: "delhi ncr",
        minExp: 3,
        maxExp: 6,
        jobRole: "frontend",
        companyName: "Dropbox",
        logoUrl: "https://logo.clearbit.com/dropbox.com"
    },
    {
        jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92011",
        jdLink: "https://weekday.works/jobs/backend",
        jobDetailsFromCompany: "Here is another example of a job listing for a backend position. As with frontend, this backend role requires a keen understanding of server-side technologies and database management. Candidates should be familiar with frameworks like Node.js and databases like PostgreSQL. Teamwork and problem-solving are highly valued skills for this role.",
        maxJdSalary: 80,
        minJdSalary: 50,
        salaryCurrencyCode: "USD",
        location: "new york",
        minExp: 5,
        maxExp: 10,
        jobRole: "backend",
        companyName: "Google",
        logoUrl: "https://logo.clearbit.com/google.com"
    },
    {
        jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92012",
        jdLink: "https://weekday.works/jobs/data-scientist",
        jobDetailsFromCompany: "We are looking for a Data Scientist who has expertise in machine learning and statistical modeling. The candidate should be proficient in Python and familiar with libraries such as Pandas and Scikit-Learn. Experience with big data technologies like Hadoop or Spark is a plus.",
        maxJdSalary: 120,
        minJdSalary: 70,
        salaryCurrencyCode: "USD",
        location: "san francisco",
        minExp: 3,
        maxExp: 8,
        jobRole: "data scientist",
        companyName: "Amazon",
        logoUrl: "https://logo.clearbit.com/amazon.com"
    }
];
