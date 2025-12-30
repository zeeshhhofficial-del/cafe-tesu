
import { MenuItem, Review } from './types';

export const SIGNATURE_MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Cappuccino Coffee',
    description: 'Double shot of artisan espresso with silky micro-foam.',
    price: '₹325',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Eggs Benedict',
    description: 'With Smoked Salmon, poached eggs, and hollandaise sauce.',
    price: '₹645',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1600335814565-0ddf0af7d6b4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'OG Nutella Waffles',
    description: 'Classic waffles loaded with Nutella, hazelnuts, and cream.',
    price: '₹495',
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1592308933602-45452d1f99c0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'French Toast',
    description: 'Brioche soaked in vanilla bean custard, served with berries.',
    price: '₹525',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1484723088339-3238336be75e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Portuguese Chicken Sandwich',
    description: 'Peri-peri chicken, flame-grilled with artisan sourdough.',
    price: '₹575',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Classic Tiramisu',
    description: 'Mascarpone layers with espresso-soaked savoiardi.',
    price: '₹445',
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Ananya Sharma',
    rating: 5,
    comment: 'The most calming vibe in South Delhi. The coffee is unmatched and the staff is incredibly professional.',
    avatar: 'https://picsum.photos/seed/ananya/100/100'
  },
  {
    id: '2',
    author: 'Rohan Malhotra',
    rating: 4,
    comment: 'Exceptional food quality. The Eggs Benedict with Smoked Salmon is a must-try. Perfect for Sunday brunch.',
    avatar: 'https://picsum.photos/seed/rohan/100/100'
  },
  {
    id: '3',
    author: 'Sanya Gupta',
    rating: 5,
    comment: 'Upscale and cozy. Love the interior aesthetics. Best place for both work meetings and dates.',
    avatar: 'https://picsum.photos/seed/sanya/100/100'
  }
];
