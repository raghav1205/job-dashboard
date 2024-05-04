import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Button, Grid } from '@mui/material';

function JobCard() {
    console.log('rednering job card')
    const job = {
        jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany: "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 61,
        minJdSalary: null,
        salaryCurrencyCode: "USD",
        location: "delhi ncr",
        minExp: 3,
        maxExp: 6,
        jobRole: "frontend engineer",
        companyName: "Dropbox",
        logoUrl: "https://logo.clearbit.com/dropbox.com"
    };

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
