import React, { useState, useEffect } from 'react';
import {
    Autocomplete,
    Container, TextField, MenuItem, Button, Grid, Typography, FormControl, CircularProgress, Paper, Box
} from '@mui/material';
import { Add, Delete as DeleteIcon } from '@mui/icons-material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import api from '/src/API';
import NavbarTechnoFarm from '../NavBr/NavBarTechnoFarmOriginal';

const AddPurchaseForm = () => {
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);
    const [parties, setParties] = useState([]);
    const [components, setComponents] = useState([]);
    const [formData, setFormData] = useState({
        paidByEmployeeId: '',
        sellerPartyId: '',
        compDetails: [{ componentId: '', quantity: 0, price: 0 }],
        amountPaid: '',
        taxAmount: '',
        balance: '',
        comment: '',
        date: new Date(),
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found in localStorage');
                    setLoading(false);
                    return;
                }
                const response = await api.get('http://localhost:8080/api/purchase/add-form-data', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    },
                });
                setEmployees(response.data.directors || []);
                setParties(response.data.party || []);
                setComponents(response.data.component || []);
            } catch (error) {
                console.error('Error fetching form data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCompDetailsChange = (index, field, value) => {
        const updatedCompDetails = [...formData.compDetails];
        updatedCompDetails[index][field] = value;
        setFormData({ ...formData, compDetails: updatedCompDetails });
    };

    const addComponent = () => {
        setFormData({
            ...formData,
            compDetails: [...formData.compDetails, { componentId: '', quantity: 0, price: 0 }],
        });
    };

    const removeComponent = (index) => {
        const updatedCompDetails = formData.compDetails.filter((_, i) => i !== index);
        setFormData({ ...formData, compDetails: updatedCompDetails });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const purchaseData = {
            paidByEmployee: { id: formData.paidByEmployeeId },
            sellerParty: { id: formData.sellerPartyId },
            compDetails: formData.compDetails.map((item) => ({
                component: { id: item.componentId },
                quantity: parseFloat(item.quantity),
                price: parseFloat(item.price),
            })),
            amountPaid: parseFloat(formData.amountPaid),
            taxAmount: parseFloat(formData.taxAmount),
            balance: parseFloat(formData.balance),
            date: formData.date.toISOString().split('T')[0],
            comment: formData.comment,
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found in localStorage');
                setLoading(false);
                return;
            }
            const response = await api.post('http://localhost:8080/api/purchase/add',  purchaseData, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              });
            console.log('Purchase submitted successfully:', response.data);
            alert('Purchase submitted successfully!');
        } catch (error) {
            console.error('Error submitting purchase:', error);
            alert('Failed to submit purchase. Please try again.');
        }
    };

    if (loading) return <CircularProgress />;

    return (
        <div>
            <NavbarTechnoFarm />
            <Container >
                <Typography variant="h4" gutterBottom align="center">Add Purchase Detail</Typography>
                <form onSubmit={handleSubmit}>
                    <Paper className='flex gap-4' elevation={2} sx={{ padding: 2, marginBottom: 3 }}>
                        <div>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <Autocomplete
                                            options={employees}
                                            getOptionLabel={(option) => option.name}
                                            onChange={(event, newValue) => {
                                                setFormData({ ...formData, paidByEmployeeId: newValue ? newValue.id : '' });
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Purchase By"
                                                    variant="outlined"
                                                    required
                                                    sx={{ width: '200px' }} // Change this value as needed
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <Autocomplete
                                            options={parties}
                                            getOptionLabel={(option) => option.name}
                                            onChange={(event, newValue) => {
                                                setFormData({ ...formData, sellerPartyId: newValue ? newValue.id : '' });
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Party"
                                                    variant="outlined"
                                                    required
                                                    sx={{ width: '200px' }} // Change this value as needed
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Date"
                                            value={formData.date}
                                            onChange={(newDate) => setFormData({ ...formData, date: newDate })}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    sx={{ width: '200px' }} // Change this value as needed
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>

                        </div>
                        <div>
                            {formData.compDetails.map((compDetail, index) => (
                                <Grid container spacing={2} key={index} alignItems="center">
                                    <Grid item xs={4}>
                                        <Autocomplete
                                            options={components}
                                            getOptionLabel={(option) => option.name}
                                            onChange={(event, newValue) => {
                                                handleCompDetailsChange(index, 'componentId', newValue ? newValue.id : '');
                                            }}
                                            renderInput={(params) => <TextField {...params} label="Component" required />}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField
                                            label="Quantity"
                                            type="number"
                                            value={compDetail.quantity}
                                            onChange={(e) => handleCompDetailsChange(index, 'quantity', e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TextField
                                            label="Price"
                                            type="number"
                                            value={compDetail.price}
                                            onChange={(e) => handleCompDetailsChange(index, 'price', e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button variant="outlined" color="secondary" onClick={() => removeComponent(index)} startIcon={<DeleteIcon />}>Remove</Button>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Button className=' ' variant="outlined" color="primary" onClick={addComponent} startIcon={<Add />}>Add </Button>
                                    </Grid>
                                </Grid>
                            ))}
                        </div>
                        
                    </Paper>


                    <Paper elevation={2} sx={{ padding: 2, marginTop: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    label="Total Amount"
                                    name="amountPaid"
                                    type="number"
                                    value={formData.amountPaid}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="Total Tax"
                                    name="taxAmount"
                                    type="number"
                                    value={formData.taxAmount}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    label="balance"
                                    name="balance"
                                    type="number"
                                    value={formData.balance}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Comment"
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    fullWidth
                                    multiline
                                    rows={3}
                                />
                            </Grid>
                        </Grid>
                    </Paper>

                    <Box mt={3}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
                    </Box>
                </form>
            </Container>
        </div>
    );
};

export default AddPurchaseForm;
