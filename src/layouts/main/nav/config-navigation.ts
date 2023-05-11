// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Home page',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'General introduction of company services', path: paths.marketing.landing },
      { title: 'Some typical case studies', path: paths.marketing.landing },
    ],
  },
  {
    order: '2',
    subheader: 'Main Service',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Tool to assess customer health', path: paths.marketing.landing },
      { title: 'Product package introduction', path: paths.marketing.landing },
      { title: 'Quotation Tool', path: paths.marketing.landing },
    ],
  },
  {
    order: '3',
    subheader: 'Business Shop',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'E-commerce', path: paths.marketing.landing },
      { title: 'Payment', path: paths.marketing.landing },
    ],
  },
  {
    order: '4',
    subheader: 'About Us',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Company details', path: paths.marketing.landing },
      { title: 'Introduce company vision', path: paths.marketing.landing },
      { title: "The company's core values", path: paths.marketing.landing },
      { title: 'Company formation time', path: paths.marketing.landing },
      { title: 'Company team', path: paths.marketing.landing },
      { title: 'Corporate customers', path: paths.marketing.landing },
    ],
  },
  {
    order: '5',
    subheader: 'Contact Us',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Offline contact information', path: paths.marketing.landing },
      { title: 'Online contact information', path: paths.marketing.landing },
    ],
  },
];

export const navConfig = [
  { title: 'Home page', path: '/', children: [pageLinks[0]] },
  {
    title: 'Main Service',
    path: paths.components.root,
    children: [pageLinks[1]],
  },
  {
    title: 'Business Shop',
    path: paths.components.root,
    children: [pageLinks[2]],
  },
  {
    title: 'About Us',
    path: paths.components.root,
    children: [pageLinks[3]],
  },
  {
    title: 'Contact Us',
    path: paths.components.root,
    children: [pageLinks[4]],
  },
];
