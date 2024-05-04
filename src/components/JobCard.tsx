import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import { Job } from '../types/Job';


interface JobCardProps {
    job: Job
}
function JobCard({ job }: JobCardProps) {
    console.log('rednering job card')


    return (
        <Card sx={{
            maxWidth: 345,
            mb: 2,
            border: 1,
            borderWidth: 0.5,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderTop: 0,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: 44,
                        height: 44,
                        marginRight: 2,
                        borderRadius: '50%',
                    }}
                    image={job.logoUrl}
                    alt={job.companyName}
                />
                <Box>
                    <Typography component="div" sx={{ fontWeight: 'bold', color: 'gray' }}>
                        {job.jobRole} at {job.companyName}
                    </Typography>
                    <Typography variant='subtitle2' component="div">
                        {job.jobRole}
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 'small' }} >
                        {job.location}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 0 }}>
                <Typography>
                    {job.minJdSalary ? `Salary: ${job.minJdSalary} to ${job.maxJdSalary} ${job.salaryCurrencyCode}` : `Salary: Up to ${job.maxJdSalary} ${job.salaryCurrencyCode}`}
                </Typography>
            </Box>
            <CardContent>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 'bold', color: 'gray' }}>
                    About Company:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {job.jobDetailsFromCompany}
                </Typography>


                <Box sx={{ mt: 1 }}>
                    <Button href={job.jdLink} target="_blank" rel="noopener">
                        Apply Here
                    </Button>
                </Box>
            </CardContent>
        </Card>


    );
}

export default JobCard;
