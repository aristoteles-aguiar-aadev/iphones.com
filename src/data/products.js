import airpodsImage from '../assets/airpods.jpeg'
import airpodsMaxImage from '../assets/airpods-max.jpeg'
import macbookImageAir from '../assets/macbook-air.jpeg'
import macbookImagePro from '../assets/macbook-pro.png'
import iphoneImage15 from '../assets/iphone-15-pro-max.png'
import iphoneImage16 from '../assets/iphone-16-pro-max.png'
import iphoneImage17 from '../assets/iphone-17-pro-max.png'
import ipadImageMini from '../assets/ipad-mini.jpeg'
import ipadImageAir from '../assets/ipad-air.jpeg'
import ipadImagePro from '../assets/ipad-pro.jpeg'  

export const macbooks = [
  {
    id: 'macbook-air-m5',
    name: 'MacBook Air M5',
    tag: 'Versatil',
    tagType: 'new',
    specs: ['M5', '16 GB RAM', '256 GB SSD', '13" Liquid Retina'],
    image: macbookImageAir,
    whatsapp: 'Quero%20comprar%20o%20MacBook%20Air%20M5',
    featured: false,
    description: 'Super leve. Poderoso com chip M5. Até 18h de bateria.'
  },
  {
    id: 'macbook-pro-m5',
    name: 'MacBook Pro M5',
    tag: 'Performance',
    tagType: 'default',
    specs: ['M5', '36 GB RAM', '1 TB SSD', '16" XDR'],
    image: macbookImagePro,
    whatsapp: 'Quero%20comprar%20o%20MacBook%20Pro%20M5',
    featured: true,
    description: 'Performance extrema para profissionais. Chip M5 com até 16 núcleos.'
  }
]

export const iphones = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15\niPhone 15 Pro\niPhone 15 Pro Max',
    tag: 'Versatil',
    tagType: 'new',
    specs: ['A16', '128 GB', '6.1" OLED', '48 MP'],
    image: iphoneImage15,
    whatsapp: 'Quero%20comprar%20o%20iPhone%2015%20Pro',
    featured: false
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16\niPhone 16 Pro\niPhone 16 Pro Max',
    tag: 'Destaque',
    tagType: 'default',
    specs: ['A18', '256 GB', '6.3 OLED', '48+12+12 MP'],
    image: iphoneImage16,
    whatsapp: 'Quero%20comprar%20o%20iPhone%2016%20Pro',
    featured: false
  },
  
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17\niPhone 17 Pro\niPhone 17 Pro Max',
    tag: 'Topo de Linha',
    tagType: 'gold',
    specs: ['A19', '512 GB', '6.9 OLED', '48+48+12 MP'],
    image: iphoneImage17,
    whatsapp: 'Quero%20comprar%20o%20iPhone%2017%20Pro%20Max',
    featured: true
  }
]

export const ipads = [
  {
    id: 'ipad-mini',
    name: 'iPad mini',
    tag: 'Portátil',
    tagType: 'default',
    specs: ['A17', '128 GB', '8.3" Liquid Retina'],
    image: ipadImageMini,
    whatsapp: 'Quero%20comprar%20o%20iPad%20mini',
    featured: false
  },
  {
    id: 'ipad-air-m3',
    name: 'iPad Air',
    tag: 'Versátil',
    tagType: 'default',
    specs: ['M3', '128 GB', '11" Liquid Retina'],
    image: ipadImageAir,
    whatsapp: 'Quero%20comprar%20o%20iPad%20Air%20M3',
    featured: false
  },
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro',
    tag: 'Destaque',
    tagType: 'gold',
    specs: ['M4', '256 GB', '11" Ultra Retina XDR'],
    image: ipadImagePro,
    whatsapp: 'Quero%20comprar%20o%20iPad%20Pro%20M4',
    featured: true
  }
]

export const airpods = [
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    tag: 'Best Seller',
    tagType: 'default',
    specs: ['H2', 'ANC 2x', 'USB-C', 'Áudio Adaptativo', 'IP54'],
    image: airpodsImage,
    whatsapp: 'Quero%20comprar%20o%20AirPods%20Pro%202',
    description: 'Cancelamento ativo de ruído, áudio adaptativo e modo transparência para uma experiência sonora inteligente no dia a dia.',
  },
  {
    id: 'airpods-max',
    name: 'AirPods Max',
    tag: 'Premium',
    tagType: 'gold',
    specs: ['Over-ear', 'ANC', 'Áudio Espacial', 'Alta fidelidade', 'Conforto premium'],
    image: airpodsMaxImage,
    whatsapp: 'Quero%20comprar%20o%20AirPods%20Max',
    description: 'Fone premium over-ear com áudio de alta fidelidade, cancelamento ativo de ruído e acabamento sofisticado.',
  },
]

export const social = {
  whatsapp: '5585999786161',
  instagram: 'felipe_iphones.ce',
  whatsappUrl: 'https://wa.me/5585999786161',
  instagramUrl: 'https://www.instagram.com/felipe_iphones.ce/'
}

