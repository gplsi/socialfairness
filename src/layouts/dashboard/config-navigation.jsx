import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('dashboard-statistics-5492'),
  },
  {
    title: 'status',
    path: '/dashboard/status',
    icon: icon('check-symbol-4815'),
  }
];

export default navConfig;
