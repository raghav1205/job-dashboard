import { Box, FormControl, InputLabel, Select, MenuItem, Chip, SelectChangeEvent, Input, TextField, stepConnectorClasses } from '@mui/material';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { applyFilters, setFilter } from '../dataSlice';
import CancelIcon from '@mui/icons-material/Cancel';
import { Search } from '@mui/icons-material';

export default function JobFilters() {
    const [role, setRole] = useState<string[]>([]);
    const [experience, setExperience] = useState<number | null | string>(null);
    const [workMode, setWorkMode] = useState<string>('');
    const [basePay, setBasePay] = useState<number | null>(0);
    const [company, setCompany] = useState<string>('');

    const dispatch = useDispatch();

    const handleChangeRole = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event;
        setRole(
            typeof value === 'string' ? value.split(',') : value,
        );

        dispatch(setFilter({ filterType: 'jobRole', value }));
        dispatch(applyFilters());
    };




    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', width: 'full', mt: '2rem', mb: '2.5rem' }}>
            <FormControl sx={{ minWidth: 120, maxWidth: 'fit-content' }}>
                <InputLabel>Roles</InputLabel>
                <Select
                    multiple
                    value={role}
                    label="Role"
                    onChange={handleChangeRole}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                >
                    <MenuItem value="frontend">Frontend</MenuItem>
                    <MenuItem value="backend">Backend</MenuItem>
                    <MenuItem value="android">Android</MenuItem>d
                    <MenuItem value="ios">IOS</MenuItem>d
                    <MenuItem value="fullstack">Full Stack</MenuItem>
                    <MenuItem value="devops">DevOps</MenuItem>
                </Select>
            </FormControl>

            {/* <FormControl sx={{ minWidth: 120, maxWidth: 200 }}>
                <InputLabel>No. of Employees</InputLabel>
                <Select
                    value={employees}
                    label="No. of Employees"
                    onChange={(e) => setEmployees(e.target.value)}
                >
                    <MenuItem value="small">1-10</MenuItem>
                    <MenuItem value="medium">11-50</MenuItem>
                    <MenuItem value="large">51-200</MenuItem>
                    <MenuItem value="enterprise">200+</MenuItem>
                </Select>
            </FormControl> */}

            <FormControl sx={{ minWidth: 120, maxWidth: 200 }}>
                <InputLabel>Experience</InputLabel>
                <Select
                    value={experience}
                    label="Experience"

                    onChange={(e) => {

                        const newExperiene = e.target.value === 0 ? 'Any' : Number(e.target.value)
                        setExperience(newExperiene)
                        dispatch(setFilter({ filterType: 'experience', value: Number(e.target.value) }))
                        dispatch(applyFilters())
                    }}
                // onClick={(e) => handleDelete(e)}
                >
                    <MenuItem value={0}>Any</MenuItem>

                    {Array.from({ length: 10 }, (_, i) => i + 1).map(value => (
                        <MenuItem key={value} value={value}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120, maxWidth: 200 }}>
                <InputLabel>Work Mode</InputLabel>
                <Select
                    value={workMode}
                    label="Work Mode"
                    onChange={(e) => {
                        setWorkMode(e.target.value)
                        if (e.target.value === 'any') {
                            dispatch(setFilter({ filterType: 'workMode', value: '' }))
                        } else {
                            dispatch(setFilter({ filterType: 'workMode', value: e.target.value }))
                        }
                        dispatch(applyFilters())
                    }}
                >
                    <MenuItem value="any">Any</MenuItem>
                    <MenuItem value="remote">Remote</MenuItem>
                    <MenuItem value="onsite">Onsite</MenuItem>
                </Select>
            </FormControl>


            <FormControl sx={{ minWidth: 120, maxWidth: 200 }}>
                <InputLabel>Base Pay</InputLabel>
                <Select
                    value={basePay}
                    label="Base Pay"
                    onChange={(e) => {
                        setBasePay(Number(e.target.value))
                        dispatch(setFilter({ filterType: 'basePay', value: Number(e.target.value) }))
                        dispatch(applyFilters())
                    }}
                >

                    <MenuItem value={0}>Any</MenuItem>
                    <MenuItem value={10}>10L</MenuItem>
                    <MenuItem value={20}>20L</MenuItem>
                    <MenuItem value={30}>30L</MenuItem>
                    <MenuItem value={40}>40L</MenuItem>
                    <MenuItem value={50}>50L</MenuItem>
                    <MenuItem value={60}>60L</MenuItem>
                    <MenuItem value={70}>70L</MenuItem>
                    <MenuItem value={80}>80L</MenuItem>
                    <MenuItem value={90}>90L</MenuItem>
                    <MenuItem value={100}>100L</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120, maxWidth: 200 }}>
                <TextField variant="outlined" placeholder='Company' value={company} onChange={
                    (e) => {
                        console.log(e.target.value)
                        setCompany(e.target.value)
                        dispatch(setFilter({ filterType: 'companyName', value: e.target.value }))
                        dispatch(applyFilters())
                    }
                } />
            </FormControl>

        </Box>
    );
}
