-- MySQL Schema for MGD Autodealer

CREATE TABLE IF NOT EXISTS listings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    year INT NOT NULL,
    bodyType VARCHAR(50),
    fuelType VARCHAR(50),
    mileage VARCHAR(50),
    gearbox VARCHAR(50),
    doors INT,
    topSpeed VARCHAR(50),
    engine VARCHAR(100),
    color VARCHAR(50),
    image TEXT,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data from original listings.json
INSERT INTO listings (id, title, price, year, bodyType, fuelType, mileage, gearbox, doors, topSpeed, engine, color, image, featured) VALUES
(6645916, '2021 BMW 8 Series', 65850, 2021, 'Sedan', 'Electric', '65,000 km', 'Automatic', 4, '260 km', '3.8L', 'Gray', 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80', true),
(6645917, '2023 Audi RS7 Sportback', 89900, 2023, 'Coupe', 'Petrol', '12,000 km', 'Automatic', 5, '305 km', '4.0L V8', 'Nardo Gray', 'https://images.unsplash.com/photo-1606152421633-87f59d5718df?auto=format&fit=crop&w=800&q=80', true),
(6645918, '2022 Mercedes-Benz G63 AMG', 145000, 2022, 'SUV', 'Petrol', '25,500 km', 'Automatic', 5, '240 km', '4.0L V8 Bi-Turbo', 'Obsidian Black', 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=800&q=80', true),
(6645919, '2020 Porsche 911 Carrera', 110000, 2020, 'Sports Car', 'Petrol', '18,200 km', 'PDK', 2, '293 km', '3.0L Flat-6', 'Guards Red', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80', false);
