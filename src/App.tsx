import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import JobCard from './components/JobCard';
import { Grid, Box, Container } from '@mui/material';

function App() {

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
  // console.log(data)
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%">
        <Grid container spacing={2} justifyContent="center">
          {data.map((job: any) => (
            <Grid item xs={12} sm={12} md={4} key={job.id}>
              <JobCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default App
