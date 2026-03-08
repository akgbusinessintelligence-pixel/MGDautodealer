// API Service for MGD Autodealer

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fetchListings = async () => {
    const response = await fetch(`${API_BASE_URL}/get_listings.php`);
    if (!response.ok) throw new Error('Failed to fetch listings');
    return response.json();
};

export const fetchListingById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/get_listings.php?id=${id}`);
    if (!response.ok) throw new Error('Failed to fetch listing');
    return response.json();
};

export const createListing = async (listingData) => {
    const response = await fetch(`${API_BASE_URL}/manage_listings.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(listingData),
    });
    return response.json();
};

export const updateListing = async (listingData) => {
    const response = await fetch(`${API_BASE_URL}/manage_listings.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(listingData),
    });
    return response.json();
};

export const deleteListing = async (id) => {
    const response = await fetch(`${API_BASE_URL}/manage_listings.php?id=${id}`, {
        method: 'DELETE',
    });
    return response.json();
};
