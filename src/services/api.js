// API Service for MGD Autodealer
const getApiBaseUrl = () => {
    if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;

    // For subdirectory deployment, we use the absolute path from root
    // This allows the browser to handle protocol (http/https) and origin automatically
    return '/2026/api';
};

const API_BASE_URL = getApiBaseUrl();
console.log('API_BASE_URL:', API_BASE_URL);

export const fetchListings = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/get_listings.php`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error('fetchListings error:', error);
        throw new Error(`Failed to load listings: ${error.message}`);
    }
};

export const fetchListingById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/get_listings.php?id=${id}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to load listing: ${error.message}`);
    }
};

export const createListing = async (listingData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/manage_listings.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listingData),
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to save vehicle: ${error.message}`);
    }
};

export const updateListing = async (listingData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/manage_listings.php`, {
            method: 'POST', // Changed from PUT
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...listingData, _method: 'PUT' }),
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to update vehicle: ${error.message}`);
    }
};

export const deleteListing = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/manage_listings.php?id=${id}&action=delete`, {
            method: 'POST', // Changed from DELETE
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to delete listing: ${error.message}`);
    }
};
