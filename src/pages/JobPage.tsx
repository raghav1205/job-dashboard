import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import JobCard from '../components/JobCard';
import { Grid, Box, Container, Skeleton, Stack, Card } from '@mui/material';
import { Job } from '../types/Job';
import JobFilters from '../components/JobFilters';



function JobPage() {

    const [requestBody, setRequestBody] = useState({
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

    const { data, loading } = useFetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions, requestBody)

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.innerHeight + document.documentElement.scrollTop, document.documentElement.offsetHeight)
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
                setRequestBody(prevRequestBody => ({
                    ...prevRequestBody,
                    offset: prevRequestBody.offset + 10
                }));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [requestBody, loading]);

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
                        ))
                        }

                    </Grid>
                </Box>
            </Container>
            {loading ? <SkeletonGrid /> : null}
        </Container>
    )
}

function SkeletonGrid() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Grid container spacing={2} justifyContent="center">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <Grid item xs={12} sm={12} md={4} key={item}>
                            <Card sx={{
                                maxWidth: 345,
                                mb: 2,
                                border: 1,
                                borderWidth: 0.5,
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderTop: 0,
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
                            }}>
                                <Stack spacing={1} width={300} height={500}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                                    <Skeleton variant="circular" width={60} height={60} />
                                    <Skeleton variant="rectangular" width={290} height={60} />
                                    <Skeleton variant="rounded" width={290} height={160} />

                                    <Skeleton variant="rectangular" width={290} height={40} />
                                </Stack>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default JobPage
