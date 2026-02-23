export interface MotorbikeRental {
    id: string;
    name: string;
    description: string;
    price: string;
    rating: number;
    image: string;
    specs: string[];
}

export const motorbikeRentals: MotorbikeRental[] = [
    {
        id: 'classic-350-new',
        name: 'Royal Enfield Classic 350 (New Gen)',
        description: 'The timeless classic, redefined for the modern explorer. Smooth power and iconic design.',
        price: 'Rs. 1,500/day',
        rating: 4.9,
        image: '/bikes/himalayan-450.jpg', // Placeholder
        specs: ['350cc J-Series', 'Classic Aesthetics', 'Dual Channel ABS']
    },
    {
        id: 'hunter-350',
        name: 'Royal Enfield Hunter 350',
        description: 'Agile, stylish, and perfect for navigating Siliguri streets and winding mountain roads.',
        price: 'Rs. 1,300/day',
        rating: 4.7,
        image: '/bikes/scram-411.jpg', // Placeholder
        specs: ['350cc', 'Urban Scrambler', 'Low Seat Height']
    },
    {
        id: 'himalayan-bike',
        name: 'Royal Enfield Himalayan',
        description: 'The mountain goat. Built for the high-altitude trails of Leh, Ladakh, and Spiti.',
        price: 'Rs. 1,800/day',
        rating: 5.0,
        image: '/bikes/himalayan-450.jpg',
        specs: ['411cc/450cc', 'Long Travel Suspension', 'Adventure Ready']
    },
    {
        id: 'interceptor-650',
        name: 'Royal Enfield Interceptor 650',
        description: 'Powerful twin-cylinder engine for the ultimate highway and mountain cruising experience.',
        price: 'Rs. 2,500/day',
        rating: 4.9,
        image: '/bikes/interceptor-650.jpg',
        specs: ['650cc Twin', 'Smooth Torque', 'Premium Cruiser']
    },
    {
        id: 'xpulse-200',
        name: 'Hero Xpulse 200 4V',
        description: 'Lightweight, nimble, and built for extreme off-road enthusiasts.',
        price: 'Rs. 1,200/day',
        rating: 4.8,
        image: '/bikes/scram-411.jpg', // Placeholder
        specs: ['200cc 4V', 'Off-road Prowess', 'Lightweight Build']
    },
    {
        id: 'avenger-220',
        name: 'Bajaj Avenger 220',
        description: 'Low-slung cruiser comfort for those long, relaxed rides through the foothills.',
        price: 'Rs. 1,200/day',
        rating: 4.6,
        image: '/bikes/interceptor-650.jpg', // Placeholder
        specs: ['220cc', 'Cruiser Comfort', 'Easy Riding']
    }
];

export interface TourFeature {
    title: string;
    description: string;
    icon: string;
}

export const tourFeatures: TourFeature[] = [
    {
        title: 'Best Quality Bikes',
        description: 'Meticulously maintained fleet for the ultimate mountain experience.',
        icon: 'Q'
    },
    {
        title: 'Lowest Price Guarantee',
        description: 'Best rental rates in Siliguri. Match guaranteed.',
        icon: 'P'
    },
    {
        title: 'Money Back Guarantee',
        description: 'Total peace of mind with our transparent refund policy.',
        icon: 'G'
    }
];
