// Car Data
const cars = [
    {
        id: 1,
        name: 'Tesla Model S',
        price: '$89,990',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '670 HP',
            acceleration: '2.1s 0-60',
            range: '405 miles',
            topSpeed: '200 mph'
        },
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 2,
        name: 'BMW X5',
        price: '$59,400',
        type: 'suv',
        specs: {
            engine: '3.0L Turbo V6',
            power: '335 HP',
            acceleration: '5.3s 0-60',
            range: '485 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 3,
        name: 'Mercedes-Benz C-Class',
        price: '$43,550',
        type: 'sedan',
        specs: {
            engine: '2.0L Turbo I4',
            power: '255 HP',
            acceleration: '5.9s 0-60',
            range: '450 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 4,
        name: 'Porsche 911',
        price: '$106,100',
        type: 'sports',
        specs: {
            engine: '3.0L Twin-Turbo H6',
            power: '379 HP',
            acceleration: '3.8s 0-60',
            range: '380 miles',
            topSpeed: '182 mph'
        },
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 5,
        name: 'Audi e-tron',
        price: '$65,900',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '355 HP',
            acceleration: '5.5s 0-60',
            range: '222 miles',
            topSpeed: '124 mph'
        },
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 6,
        name: 'Toyota RAV4',
        price: '$27,975',
        type: 'suv',
        specs: {
            engine: '2.5L I4 Hybrid',
            power: '219 HP',
            acceleration: '7.8s 0-60',
            range: '580 miles',
            topSpeed: '112 mph'
        },
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 7,
        name: 'Honda Accord',
        price: '$26,120',
        type: 'sedan',
        specs: {
            engine: '1.5L Turbo I4',
            power: '192 HP',
            acceleration: '7.2s 0-60',
            range: '520 miles',
            topSpeed: '120 mph'
        },
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 8,
        name: 'Lamborghini Huracán',
        price: '$208,571',
        type: 'supercar',
        specs: {
            engine: '5.2L V10',
            power: '602 HP',
            acceleration: '2.9s 0-60',
            range: '280 miles',
            topSpeed: '201 mph'
        },
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c53059a3?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 9,
        name: 'Ford Mustang Mach-E',
        price: '$42,895',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '266 HP',
            acceleration: '6.1s 0-60',
            range: '300 miles',
            topSpeed: '111 mph'
        },
        image: 'https://images.unsplash.com/photo-1617816026196-53d5e1e1f2b8?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 10,
        name: 'Ferrari 488 GTB',
        price: '$254,000',
        type: 'supercar',
        specs: {
            engine: '3.9L Twin-Turbo V8',
            power: '661 HP',
            acceleration: '3.0s 0-60',
            range: '320 miles',
            topSpeed: '205 mph'
        },
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 11,
        name: 'Range Rover Sport',
        price: '$76,000',
        type: 'suv',
        specs: {
            engine: '3.0L Supercharged V6',
            power: '355 HP',
            acceleration: '6.3s 0-60',
            range: '450 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 12,
        name: 'Audi A4',
        price: '$39,900',
        type: 'sedan',
        specs: {
            engine: '2.0L Turbo I4',
            power: '248 HP',
            acceleration: '5.7s 0-60',
            range: '460 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f6a0d0c54?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 13,
        name: 'Nissan Leaf',
        price: '$28,140',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '214 HP',
            acceleration: '7.4s 0-60',
            range: '149 miles',
            topSpeed: '98 mph'
        },
        image: 'https://images.unsplash.com/photo-1583981343889-2c40c2f5b3b2?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 14,
        name: 'Chevrolet Corvette',
        price: '$60,900',
        type: 'sports',
        specs: {
            engine: '6.2L V8',
            power: '490 HP',
            acceleration: '2.9s 0-60',
            range: '400 miles',
            topSpeed: '194 mph'
        },
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 15,
        name: 'Volkswagen Golf GTI',
        price: '$29,545',
        type: 'hatchback',
        specs: {
            engine: '2.0L Turbo I4',
            power: '241 HP',
            acceleration: '5.9s 0-60',
            range: '420 miles',
            topSpeed: '155 mph'
        },
        image: 'https://images.unsplash.com/photo-1551836022-deb9668aa715?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 16,
        name: 'Ford F-150',
        price: '$32,790',
        type: 'pickup',
        specs: {
            engine: '3.5L EcoBoost V6',
            power: '400 HP',
            acceleration: '5.8s 0-60',
            range: '500 miles',
            topSpeed: '112 mph'
        },
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 17,
        name: 'BMW 3 Series',
        price: '$41,450',
        type: 'sedan',
        specs: {
            engine: '2.0L Turbo I4',
            power: '255 HP',
            acceleration: '5.6s 0-60',
            range: '440 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 18,
        name: 'Mazda MX-5 Miata',
        price: '$26,830',
        type: 'convertible',
        specs: {
            engine: '2.0L I4',
            power: '181 HP',
            acceleration: '6.1s 0-60',
            range: '380 miles',
            topSpeed: '135 mph'
        },
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 19,
        name: 'Jeep Wrangler',
        price: '$28,295',
        type: 'suv',
        specs: {
            engine: '3.6L V6',
            power: '285 HP',
            acceleration: '7.5s 0-60',
            range: '400 miles',
            topSpeed: '112 mph'
        },
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 20,
        name: 'Lexus RX 350',
        price: '$45,070',
        type: 'suv',
        specs: {
            engine: '3.5L V6',
            power: '295 HP',
            acceleration: '7.3s 0-60',
            range: '470 miles',
            topSpeed: '124 mph'
        },
        image: 'https://images.unsplash.com/photo-1619649405293-9e8481c8a018?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 21,
        name: 'Mercedes-Benz S-Class',
        price: '$111,100',
        type: 'luxury',
        specs: {
            engine: '3.0L Turbo I6',
            power: '429 HP',
            acceleration: '4.5s 0-60',
            range: '480 miles',
            topSpeed: '155 mph'
        },
        image: 'https://images.unsplash.com/photo-1619762281222-2d21e13c443f?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 22,
        name: 'Toyota Camry',
        price: '$25,045',
        type: 'sedan',
        specs: {
            engine: '2.5L I4 Hybrid',
            power: '208 HP',
            acceleration: '7.9s 0-60',
            range: '600 miles',
            topSpeed: '118 mph'
        },
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 23,
        name: 'Hyundai Kona Electric',
        price: '$34,000',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '201 HP',
            acceleration: '7.6s 0-60',
            range: '258 miles',
            topSpeed: '104 mph'
        },
        image: 'https://images.unsplash.com/photo-1583981343889-2c40c2f5b3b2?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 24,
        name: 'Aston Martin DB11',
        price: '$205,000',
        type: 'sports',
        specs: {
            engine: '4.0L Twin-Turbo V8',
            power: '528 HP',
            acceleration: '3.9s 0-60',
            range: '350 miles',
            topSpeed: '187 mph'
        },
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c53059a3?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 25,
        name: 'Subaru Outback',
        price: '$26,645',
        type: 'wagon',
        specs: {
            engine: '2.5L Flat-4',
            power: '182 HP',
            acceleration: '8.5s 0-60',
            range: '550 miles',
            topSpeed: '120 mph'
        },
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 26,
        name: 'Ford Mustang',
        price: '$27,155',
        type: 'coupe',
        specs: {
            engine: '2.3L EcoBoost I4',
            power: '310 HP',
            acceleration: '5.1s 0-60',
            range: '400 miles',
            topSpeed: '145 mph'
        },
        image: 'https://images.unsplash.com/photo-1584345604476-8ec5f82f02bb?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 27,
        name: 'Tesla Model 3',
        price: '$40,240',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '283 HP',
            acceleration: '5.3s 0-60',
            range: '358 miles',
            topSpeed: '140 mph'
        },
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 28,
        name: 'Chevrolet Silverado',
        price: '$30,300',
        type: 'pickup',
        specs: {
            engine: '5.3L V8',
            power: '355 HP',
            acceleration: '6.5s 0-60',
            range: '480 miles',
            topSpeed: '110 mph'
        },
        image: 'https://images.unsplash.com/photo-1579684945554-c8582a5ad0ff?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 29,
        name: 'BMW M4',
        price: '$71,800',
        type: 'coupe',
        specs: {
            engine: '3.0L Twin-Turbo I6',
            power: '473 HP',
            acceleration: '3.8s 0-60',
            range: '380 miles',
            topSpeed: '155 mph'
        },
        image: 'https://images.unsplash.com/photo-1580273915020-4e7f6d2c8c6e?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 30,
        name: 'Honda Civic',
        price: '$22,350',
        type: 'compact',
        specs: {
            engine: '2.0L I4',
            power: '158 HP',
            acceleration: '7.5s 0-60',
            range: '500 miles',
            topSpeed: '125 mph'
        },
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 31,
        name: 'Audi Q7',
        price: '$54,800',
        type: 'suv',
        specs: {
            engine: '3.0L Turbo V6',
            power: '335 HP',
            acceleration: '5.7s 0-60',
            range: '460 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 32,
        name: 'Toyota Prius',
        price: '$24,525',
        type: 'hybrid',
        specs: {
            engine: '1.8L I4 Hybrid',
            power: '121 HP',
            acceleration: '10.1s 0-60',
            range: '640 miles',
            topSpeed: '112 mph'
        },
        image: 'https://images.unsplash.com/photo-1617816026196-53d5e1e1f2b8?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 33,
        name: 'McLaren 720S',
        price: '$299,000',
        type: 'supercar',
        specs: {
            engine: '4.0L Twin-Turbo V8',
            power: '710 HP',
            acceleration: '2.8s 0-60',
            range: '310 miles',
            topSpeed: '212 mph'
        },
        image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 34,
        name: 'Volvo XC90',
        price: '$49,800',
        type: 'suv',
        specs: {
            engine: '2.0L Turbo I4',
            power: '250 HP',
            acceleration: '6.5s 0-60',
            range: '450 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f6a0d0c54?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 35,
        name: 'Cadillac Escalade',
        price: '$76,195',
        type: 'luxury',
        specs: {
            engine: '6.2L V8',
            power: '420 HP',
            acceleration: '5.9s 0-60',
            range: '420 miles',
            topSpeed: '120 mph'
        },
        image: 'https://images.unsplash.com/photo-1619762281222-2d21e13c443f?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 36,
        name: 'Nissan GT-R',
        price: '$113,540',
        type: 'sports',
        specs: {
            engine: '3.8L Twin-Turbo V6',
            power: '565 HP',
            acceleration: '2.9s 0-60',
            range: '340 miles',
            topSpeed: '196 mph'
        },
        image: 'https://images.unsplash.com/photo-1580273915020-4e7f6d2c8c6e?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 37,
        name: 'Tesla Model X',
        price: '$98,940',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '670 HP',
            acceleration: '3.8s 0-60',
            range: '348 miles',
            topSpeed: '155 mph'
        },
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 38,
        name: 'Honda Odyssey',
        price: '$32,110',
        type: 'minivan',
        specs: {
            engine: '3.5L V6',
            power: '280 HP',
            acceleration: '7.5s 0-60',
            range: '480 miles',
            topSpeed: '115 mph'
        },
        image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 39,
        name: 'Porsche Cayenne',
        price: '$68,850',
        type: 'suv',
        specs: {
            engine: '3.0L Turbo V6',
            power: '335 HP',
            acceleration: '5.9s 0-60',
            range: '440 miles',
            topSpeed: '152 mph'
        },
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 40,
        name: 'Mazda CX-5',
        price: '$26,700',
        type: 'suv',
        specs: {
            engine: '2.5L I4',
            power: '187 HP',
            acceleration: '7.7s 0-60',
            range: '480 miles',
            topSpeed: '120 mph'
        },
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 41,
        name: 'Audi TT',
        price: '$45,500',
        type: 'coupe',
        specs: {
            engine: '2.0L Turbo I4',
            power: '228 HP',
            acceleration: '5.3s 0-60',
            range: '400 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 42,
        name: 'Jaguar F-Type',
        price: '$61,600',
        type: 'convertible',
        specs: {
            engine: '2.0L Turbo I4',
            power: '296 HP',
            acceleration: '5.4s 0-60',
            range: '380 miles',
            topSpeed: '155 mph'
        },
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 43,
        name: 'Kia Telluride',
        price: '$32,190',
        type: 'suv',
        specs: {
            engine: '3.8L V6',
            power: '291 HP',
            acceleration: '7.0s 0-60',
            range: '460 miles',
            topSpeed: '120 mph'
        },
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 44,
        name: 'BMW iX',
        price: '$84,195',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '516 HP',
            acceleration: '4.6s 0-60',
            range: '324 miles',
            topSpeed: '124 mph'
        },
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 45,
        name: 'Dodge Challenger',
        price: '$30,095',
        type: 'muscle',
        specs: {
            engine: '3.6L V6',
            power: '305 HP',
            acceleration: '5.8s 0-60',
            range: '410 miles',
            topSpeed: '140 mph'
        },
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 46,
        name: 'Subaru WRX',
        price: '$27,495',
        type: 'sedan',
        specs: {
            engine: '2.4L Turbo Flat-4',
            power: '271 HP',
            acceleration: '5.4s 0-60',
            range: '420 miles',
            topSpeed: '144 mph'
        },
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f6a0d0c54?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 47,
        name: 'Genesis G90',
        price: '$78,400',
        type: 'luxury',
        specs: {
            engine: '3.3L Twin-Turbo V6',
            power: '365 HP',
            acceleration: '5.0s 0-60',
            range: '450 miles',
            topSpeed: '149 mph'
        },
        image: 'https://images.unsplash.com/photo-1619762281222-2d21e13c443f?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 48,
        name: 'Volkswagen ID.4',
        price: '$38,995',
        type: 'electric',
        specs: {
            engine: 'Electric',
            power: '201 HP',
            acceleration: '7.5s 0-60',
            range: '250 miles',
            topSpeed: '99 mph'
        },
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 49,
        name: '1967 Ford Mustang',
        price: '$45,000',
        type: 'classic',
        specs: {
            engine: '4.7L V8',
            power: '200 HP',
            acceleration: '8.5s 0-60',
            range: '280 miles',
            topSpeed: '115 mph'
        },
        image: 'https://images.unsplash.com/photo-1549317661-bd42c42494e3?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 50,
        name: '1969 Chevrolet Camaro',
        price: '$52,000',
        type: 'muscle',
        specs: {
            engine: '5.7L V8',
            power: '290 HP',
            acceleration: '6.5s 0-60',
            range: '260 miles',
            topSpeed: '125 mph'
        },
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 51,
        name: '1955 Mercedes 300 SL',
        price: '$1,200,000',
        type: 'vintage',
        specs: {
            engine: '3.0L I6',
            power: '215 HP',
            acceleration: '9.0s 0-60',
            range: '220 miles',
            topSpeed: '130 mph'
        },
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 52,
        name: '1961 Jaguar E-Type',
        price: '$175,000',
        type: 'vintage',
        specs: {
            engine: '3.8L I6',
            power: '265 HP',
            acceleration: '7.0s 0-60',
            range: '250 miles',
            topSpeed: '150 mph'
        },
        image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 53,
        name: '1970 Dodge Charger',
        price: '$65,000',
        type: 'muscle',
        specs: {
            engine: '7.2L V8',
            power: '375 HP',
            acceleration: '5.8s 0-60',
            range: '240 miles',
            topSpeed: '140 mph'
        },
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 54,
        name: '1959 Cadillac Eldorado',
        price: '$85,000',
        type: 'classic',
        specs: {
            engine: '6.4L V8',
            power: '345 HP',
            acceleration: '10.0s 0-60',
            range: '220 miles',
            topSpeed: '120 mph'
        },
        image: 'https://images.unsplash.com/photo-1449967414144-17ab3e4a1f50?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 55,
        name: '1963 Volkswagen Beetle',
        price: '$28,000',
        type: 'vintage',
        specs: {
            engine: '1.2L Flat-4',
            power: '40 HP',
            acceleration: '27.0s 0-60',
            range: '280 miles',
            topSpeed: '72 mph'
        },
        image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 56,
        name: '1985 Porsche 911',
        price: '$95,000',
        type: 'classic',
        specs: {
            engine: '3.2L Flat-6',
            power: '231 HP',
            acceleration: '5.8s 0-60',
            range: '320 miles',
            topSpeed: '152 mph'
        },
        image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 57,
        name: '1978 Pontiac Firebird',
        price: '$42,000',
        type: 'muscle',
        specs: {
            engine: '6.6L V8',
            power: '220 HP',
            acceleration: '7.5s 0-60',
            range: '260 miles',
            topSpeed: '125 mph'
        },
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 58,
        name: 'Ford Mustang GT',
        price: '$38,000',
        type: 'muscle',
        specs: {
            engine: '5.0L V8',
            power: '450 HP',
            acceleration: '4.3s 0-60',
            range: '380 miles',
            topSpeed: '155 mph'
        },
        image: 'https://images.unsplash.com/photo-1584345604476-8ec5f82f02bb?w=800&h=600&fit=crop&q=80'
    },
    {
        id: 59,
        name: 'Chevrolet Camaro SS',
        price: '$43,000',
        type: 'muscle',
        specs: {
            engine: '6.2L V8',
            power: '455 HP',
            acceleration: '4.0s 0-60',
            range: '360 miles',
            topSpeed: '165 mph'
        },
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
    },
    {
        id: 60,
        name: '1972 Chevrolet Corvette',
        price: '$58,000',
        type: 'classic',
        specs: {
            engine: '5.7L V8',
            power: '270 HP',
            acceleration: '6.2s 0-60',
            range: '280 miles',
            topSpeed: '135 mph'
        },
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&q=80'
    }
];

// State Management
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentFilter = 'all';
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
let carRatings = JSON.parse(localStorage.getItem('carRatings')) || {};

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const carsGrid = document.getElementById('cars-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const wishlistGrid = document.getElementById('wishlist-grid');
const wishlistLink = document.getElementById('wishlist-link');
const wishlistCount = document.querySelector('.wishlist-count');
const compareBtn = document.getElementById('compare-btn');
const car1Select = document.getElementById('car1-select');
const car2Select = document.getElementById('car2-select');
const comparisonResult = document.getElementById('comparison-result');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const calculateBtn = document.getElementById('calculate-btn');
const calculatorResult = document.getElementById('calculator-result');
const recentGrid = document.getElementById('recent-grid');
const carModal = document.getElementById('car-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
    populateSelects();
    updateWishlistCount();
    renderWishlist();
    renderRecentlyViewed();
    
    // Search functionality
    searchInput.addEventListener('input', () => {
        renderCars();
    });
    
    // Sort functionality
    sortSelect.addEventListener('change', () => {
        renderCars();
    });
    
    // Calculator functionality
    calculateBtn.addEventListener('click', calculateLoan);
    
    // Modal functionality
    modalClose.addEventListener('click', () => {
        carModal.classList.remove('show');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === carModal) {
            carModal.classList.remove('show');
        }
    });
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Filter Buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderCars();
    });
});

// Render Cars
function renderCars() {
    let filteredCars = currentFilter === 'all' 
        ? cars 
        : cars.filter(car => car.type === currentFilter);
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredCars = filteredCars.filter(car => {
            const priceNum = parseInt(car.price.replace(/[^0-9]/g, ''));
            const searchNum = parseInt(searchTerm.replace(/[^0-9]/g, ''));
            return car.name.toLowerCase().includes(searchTerm) ||
                   car.type.toLowerCase().includes(searchTerm) ||
                   (searchNum && priceNum && priceNum.toString().includes(searchNum.toString()));
        });
    }
    
    // Apply sorting
    const sortValue = sortSelect.value;
    filteredCars = sortCars(filteredCars, sortValue);
    
    if (filteredCars.length === 0) {
        carsGrid.innerHTML = '<p class="empty-wishlist" style="grid-column: 1/-1; text-align: center; padding: 3rem;">No cars found matching your criteria.</p>';
        return;
    }
    
    carsGrid.innerHTML = filteredCars.map(car => createCarCard(car)).join('');
    
    // Add event listeners to favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = parseInt(e.currentTarget.dataset.id);
            toggleWishlist(carId);
        });
    });
}

// Sort Cars
function sortCars(carsArray, sortType) {
    const sorted = [...carsArray];
    
    switch(sortType) {
        case 'price-low':
            return sorted.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
                const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
                return priceA - priceB;
            });
        case 'price-high':
            return sorted.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
                const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
                return priceB - priceA;
            });
        case 'power-high':
            return sorted.sort((a, b) => {
                const powerA = parseInt(a.specs.power.replace(/[^0-9]/g, ''));
                const powerB = parseInt(b.specs.power.replace(/[^0-9]/g, ''));
                return powerB - powerA;
            });
        case 'name-asc':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}

// Create Car Card
function createCarCard(car) {
    const isInWishlist = wishlist.includes(car.id);
    const rating = carRatings[car.id] || 0;
    const ratingStars = getRatingStars(rating);
    
    return `
        <div class="car-card" data-car-id="${car.id}">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop';">
            </div>
            <div class="car-info">
                <div class="car-header">
                    <div class="car-name">${car.name}</div>
                    <div class="car-price">${car.price}</div>
                </div>
                ${rating > 0 ? `
                <div class="car-rating">
                    ${ratingStars}
                    <span>(${rating}/5)</span>
                </div>
                ` : ''}
                <div class="car-specs">
                    <span><i class="fas fa-cog"></i> ${car.specs.engine}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.specs.power}</span>
                    <span><i class="fas fa-stopwatch"></i> ${car.specs.acceleration}</span>
                    <span><i class="fas fa-route"></i> ${car.specs.range}</span>
                    <span><i class="fas fa-gauge-high"></i> ${car.specs.topSpeed}</span>
                </div>
                <div class="car-actions">
                    <button class="btn-icon favorite-btn ${isInWishlist ? 'active' : ''}" data-id="${car.id}">
                        <i class="fas fa-heart"></i>
                        ${isInWishlist ? 'Saved' : 'Save'}
                    </button>
                    <button class="btn-icon" onclick="viewDetails(${car.id})">
                        <i class="fas fa-info-circle"></i>
                        Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Get Rating Stars
function getRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Toggle Wishlist
function toggleWishlist(carId) {
    const index = wishlist.indexOf(carId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(carId);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderCars();
    renderWishlist();
    
    // Update button text with animation
    const btn = document.querySelector(`.favorite-btn[data-id="${carId}"]`);
    if (btn) {
        btn.classList.toggle('active');
        const icon = btn.querySelector('i');
        const text = btn.querySelector('i').nextSibling;
        if (btn.classList.contains('active')) {
            icon.className = 'fas fa-heart';
            text.textContent = ' Saved';
        } else {
            icon.className = 'far fa-heart';
            text.textContent = ' Save';
        }
    }
}

// Update Wishlist Count
function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

// Render Wishlist
function renderWishlist() {
    if (wishlist.length === 0) {
        wishlistGrid.innerHTML = '<p class="empty-wishlist">Your wishlist is empty. Start adding your favorite cars!</p>';
        return;
    }
    
    const wishlistCars = cars.filter(car => wishlist.includes(car.id));
    wishlistGrid.innerHTML = wishlistCars.map(car => createCarCard(car)).join('');
    
    // Add event listeners
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = parseInt(e.currentTarget.dataset.id);
            toggleWishlist(carId);
        });
    });
}

// Populate Compare Selects
function populateSelects() {
    cars.forEach(car => {
        const option1 = document.createElement('option');
        option1.value = car.id;
        option1.textContent = car.name;
        car1Select.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = car.id;
        option2.textContent = car.name;
        car2Select.appendChild(option2);
    });
}

// Compare Cars
compareBtn.addEventListener('click', () => {
    const car1Id = parseInt(car1Select.value);
    const car2Id = parseInt(car2Select.value);
    
    if (!car1Id || !car2Id) {
        alert('Please select both cars to compare!');
        return;
    }
    
    if (car1Id === car2Id) {
        alert('Please select two different cars!');
        return;
    }
    
    const car1 = cars.find(c => c.id === car1Id);
    const car2 = cars.find(c => c.id === car2Id);
    
    comparisonResult.innerHTML = `
        <div class="comparison-card">
            <h3>${car1.name}</h3>
            <div class="comparison-item">
                <span class="comparison-label">Price</span>
                <span class="comparison-value">${car1.price}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">Engine</span>
                <span class="comparison-value">${car1.specs.engine}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">Power</span>
                <span class="comparison-value">${car1.specs.power}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">0-60 mph</span>
                <span class="comparison-value">${car1.specs.acceleration}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">Range</span>
                <span class="comparison-value">${car1.specs.range}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">Top Speed</span>
                <span class="comparison-value">${car1.specs.topSpeed}</span>
            </div>
        </div>
        <div class="comparison-card">
            <h3>${car2.name}</h3>
            <div class="comparison-item">
                <span class="comparison-label">Price</span>
                <span class="comparison-value">${car2.price}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">Engine</span>
                <span class="comparison-value">${car2.specs.engine}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">Power</span>
                <span class="comparison-value">${car2.specs.power}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">0-60 mph</span>
                <span class="comparison-value">${car2.specs.acceleration}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">Range</span>
                <span class="comparison-value">${car2.specs.range}</span>
            </div>
            <div class="comparison-item">
                <span class="comparison-label">Top Speed</span>
                <span class="comparison-value">${car2.specs.topSpeed}</span>
            </div>
        </div>
    `;
    
    comparisonResult.classList.add('show');
    comparisonResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// View Details - Enhanced Modal
function viewDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;
    
    // Add to recently viewed
    addToRecentlyViewed(carId);
    
    const rating = carRatings[car.id] || 0;
    const ratingStars = getRatingStars(rating);
    
    modalBody.innerHTML = `
        <div class="modal-car-image">
            <img src="${car.image}" alt="${car.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop';">
        </div>
        <div class="modal-car-name">${car.name}</div>
        <div class="modal-car-price">${car.price}</div>
        
        <div class="modal-rating">
            <div>
                <div class="rating-stars">${ratingStars}</div>
                <div style="margin-top: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    ${rating > 0 ? `Rated ${rating}/5` : 'Not rated yet'}
                </div>
            </div>
            <div class="rating-input">
                <label for="rating-select">Rate this car:</label>
                <select id="rating-select" onchange="rateCar(${car.id}, this.value)">
                    <option value="0">Select rating...</option>
                    <option value="1" ${rating === 1 ? 'selected' : ''}>1 - Poor</option>
                    <option value="2" ${rating === 2 ? 'selected' : ''}>2 - Fair</option>
                    <option value="3" ${rating === 3 ? 'selected' : ''}>3 - Good</option>
                    <option value="4" ${rating === 4 ? 'selected' : ''}>4 - Very Good</option>
                    <option value="5" ${rating === 5 ? 'selected' : ''}>5 - Excellent</option>
                </select>
            </div>
        </div>
        
        <div class="modal-specs">
            <div class="modal-spec-item">
                <div class="modal-spec-label"><i class="fas fa-cog"></i> Engine</div>
                <div class="modal-spec-value">${car.specs.engine}</div>
            </div>
            <div class="modal-spec-item">
                <div class="modal-spec-label"><i class="fas fa-tachometer-alt"></i> Power</div>
                <div class="modal-spec-value">${car.specs.power}</div>
            </div>
            <div class="modal-spec-item">
                <div class="modal-spec-label"><i class="fas fa-stopwatch"></i> Acceleration</div>
                <div class="modal-spec-value">${car.specs.acceleration}</div>
            </div>
            <div class="modal-spec-item">
                <div class="modal-spec-label"><i class="fas fa-route"></i> Range</div>
                <div class="modal-spec-value">${car.specs.range}</div>
            </div>
            <div class="modal-spec-item">
                <div class="modal-spec-label"><i class="fas fa-gauge-high"></i> Top Speed</div>
                <div class="modal-spec-value">${car.specs.topSpeed}</div>
            </div>
            <div class="modal-spec-item">
                <div class="modal-spec-label"><i class="fas fa-tag"></i> Type</div>
                <div class="modal-spec-value" style="text-transform: capitalize;">${car.type}</div>
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
            <button class="btn btn-primary" onclick="useInCalculator(${car.id})" style="flex: 1;">
                <i class="fas fa-calculator"></i> Calculate Loan
            </button>
            <button class="btn-icon" onclick="toggleWishlist(${car.id}); carModal.classList.remove('show');" style="flex: 1;">
                <i class="fas fa-heart"></i> ${wishlist.includes(car.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
        </div>
    `;
    
    carModal.classList.add('show');
}

// Rate Car
function rateCar(carId, rating) {
    carRatings[carId] = parseInt(rating);
    localStorage.setItem('carRatings', JSON.stringify(carRatings));
    
    // Update modal if open
    if (carModal.classList.contains('show')) {
        viewDetails(carId);
    }
    
    // Update car cards
    renderCars();
    renderWishlist();
    renderRecentlyViewed();
}

// Add to Recently Viewed
function addToRecentlyViewed(carId) {
    // Remove if already exists
    recentlyViewed = recentlyViewed.filter(id => id !== carId);
    // Add to beginning
    recentlyViewed.unshift(carId);
    // Keep only last 6
    recentlyViewed = recentlyViewed.slice(0, 6);
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    renderRecentlyViewed();
}

// Render Recently Viewed
function renderRecentlyViewed() {
    if (recentlyViewed.length === 0) {
        recentGrid.innerHTML = '<p class="empty-recent">No recently viewed cars yet. Start browsing!</p>';
        return;
    }
    
    const recentCars = recentlyViewed.map(id => cars.find(c => c.id === id)).filter(Boolean);
    recentGrid.innerHTML = recentCars.map(car => createCarCard(car)).join('');
    
    // Add event listeners
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = parseInt(e.currentTarget.dataset.id);
            toggleWishlist(carId);
        });
    });
}

// Calculate Loan
function calculateLoan() {
    const price = parseFloat(document.getElementById('car-price').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value) || 0;
    const interestRate = parseFloat(document.getElementById('interest-rate').value) || 0;
    const loanTerm = parseFloat(document.getElementById('loan-term').value) || 0;
    
    if (!price || price <= 0) {
        alert('Please enter a valid car price');
        return;
    }
    
    if (downPayment >= price) {
        alert('Down payment cannot be greater than or equal to car price');
        return;
    }
    
    const principal = price - downPayment;
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
    
    let monthlyPayment = 0;
    if (interestRate > 0 && loanTerm > 0) {
        monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                         (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else if (loanTerm > 0) {
        monthlyPayment = principal / numberOfPayments;
    } else {
        monthlyPayment = principal;
    }
    
    const totalAmount = monthlyPayment * numberOfPayments;
    const totalInterest = totalAmount - principal;
    
    document.getElementById('monthly-payment').textContent = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById('total-interest').textContent = `$${totalInterest.toFixed(2)}`;
    
    calculatorResult.classList.add('show');
    calculatorResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Use Car in Calculator
function useInCalculator(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        const price = parseInt(car.price.replace(/[^0-9]/g, ''));
        document.getElementById('car-price').value = price;
        carModal.classList.remove('show');
        document.querySelector('#calculator').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
