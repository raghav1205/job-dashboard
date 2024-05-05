import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import JobCard from '../components/JobCard';
import { Grid, Box, Container } from '@mui/material';
import { Job } from '../types/Job';
import JobFilters from '../components/JobFilters';



function JobPage() {

    const [requestBody] = useState({
        "limit": 10,
        "offset": 0
    })

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: requestBody
    };



    const { data } = useFetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions, requestBody)
    // console.log(data, 'in job page')
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <JobFilters />
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                    <Grid container spacing={2} justifyContent="center">
                        {data && data?.map((job: Job) => (
                            <Grid item xs={12} sm={12} md={4} key={job.jdUid}>
                                <JobCard job={job} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Container>
    )
}

export default JobPage
