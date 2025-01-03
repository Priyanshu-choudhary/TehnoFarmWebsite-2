import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '/src/API';
import { useNavigate } from 'react-router-dom';
import NavbarTechnoFarm from '../NavBr/NavBarTechnoFarmOriginal';
import { TextField } from '@mui/material';

const ShowParty = () => {
    const [party, setParty] = useState([]);
    const [filteredParty, setFilteredParty] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPurchase, setSelectedPurchase] = useState(null); // State for selected purchase
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const navigate = useNavigate();

    useEffect(() => {
        const fetchParty = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/api/party', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setParty(response.data);
                setFilteredParty(response.data); // Initialize filteredParty with all data
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching party data:', error);
                setError('Failed to fetch party data.');
            } finally {
                setLoading(false);
            }
        };
        fetchParty();
    }, []);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const filtered = party.filter((p) =>
            p.name.toLowerCase().includes(value.toLowerCase()) ||
            p.city.toLowerCase().includes(value.toLowerCase()) ||
            p.businessName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredParty(filtered);
    };

    if (loading) {
        return <div>Loading party data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    const handleRowClick = async (saleId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }

            const response = await api.get(`/api/party/${saleId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            });

            setSelectedPurchase(response.data);
            console.log(response.data);

            setIsModalOpen(true);
        } catch (error) {
            console.error('Error fetching sale detail:', error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);

    };


    return (
        <div>
            <NavbarTechnoFarm />
            <div className="p-4">
                <div className='flex' style={{ justifyContent: "space-between" }}>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Parties List</h2>
                    <button className='bg-blue-400 rounded-md font-bold px-2 h-10 hover:bg-blue-600' onClick={() => { navigate(`/AddParty`) }} >
                        Add Party +
                    </button>
                </div>
                <TextField
                    label="Search by Name, City, or Business Name"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleSearch}
                    margin="normal"
                />
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 mt-4">
                        <thead className="bg-gray-300 font-bold">
                            <tr>
                                <th className="px-6 py-3 text-left text-md text-gray-700">No.</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Party Name</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Business Name</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">City</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredParty.map((sale, index) => (
                                <tr
                                    key={sale.id}
                                    className={`cursor-pointer ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                                    onClick={() => handleRowClick(sale.id)}
                                >
                                    <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{sale.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{sale.businessName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{sale.city}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{sale.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredParty.length === 0 && (
                        <p className="text-center text-gray-600 mt-4">No parties found matching the search criteria.</p>
                    )}
                </div>
                {isModalOpen && selectedPurchase && (
                    <div style={{
                        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(31, 41, 55, 0.5)", display: "flex",
                        justifyContent: "center", alignItems: "center", zIndex: 50,
                        width: "100%", overflowY: "auto", padding: "20px", borderRadius: "8px"
                    }}>
                        <div style={{
                            backgroundColor: "white", padding: "1.5rem", borderRadius: "0.5rem",
                            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)", maxWidth: "38rem", width: "100%"
                        }}>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
                                {selectedPurchase.name} Purchase Details
                            </h2>
                            <div>
                                <table className="min-w-full bg-white border-y border-gray-300 ">
                                    <tbody className='m-4'>

                                        <tr><td><strong>name</strong></td><td>{selectedPurchase.amountPaid}</td></tr>
                                        <tr><td><strong>city:</strong></td><td>{selectedPurchase.city}</td></tr>
                                        <tr><td><strong>businessName:</strong></td><td>{selectedPurchase.businessName}</td></tr>
                                        <tr><td><strong>type:</strong></td><td>{selectedPurchase.type}</td></tr>

                                        <tr><td><strong>shopNo:</strong></td><td>{selectedPurchase.shopNo}</td></tr>
                                        <tr><td><strong>address</strong></td><td>{selectedPurchase.address}</td></tr>
                                        <tr><td><strong>date:</strong></td><td>{selectedPurchase.date}</td></tr>
                                        <tr><td><strong>gstNo:</strong></td><td>{selectedPurchase.gstNo}</td></tr>
                                        <tr><td><strong>paymentRating:</strong></td><td>{selectedPurchase.paymentRating}</td></tr>
                                        <tr><td><strong>salesRating:</strong></td><td>{selectedPurchase.salesRating}</td></tr>
                                        <tr><td><strong>comment:</strong></td><td>{selectedPurchase.comment}</td></tr>
                                        <tr><td><strong>Balance:</strong></td><td>{selectedPurchase.balance}</td></tr>
                                        {/* Add other purchase details as needed */}
                                    </tbody>
                                </table>

                            </div>
                            <div className='flex justify-between'>
                                <button onClick={closeModal} style={{
                                    marginTop: "1rem", backgroundColor: "#3b82f6", color: "white",
                                    padding: "0.5rem 1rem", borderRadius: "0.25rem", cursor: "pointer", border: "none"
                                }}>Close</button>

                                <button onClick={() => { navigate(`/AddParty/${selectedPurchase.id}`) }} style={{
                                    marginTop: "1rem", backgroundColor: "#3b82f6", color: "white",
                                    padding: "0.5rem 1rem", borderRadius: "0.25rem", cursor: "pointer", border: "none"
                                }}>Update</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowParty;
