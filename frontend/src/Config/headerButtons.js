import { createSelector } from 'reselect';

const selectPermissions = () => [];
const selectPathname = state => state.router.location.pathname;
const selectUser = state => state.user;

export default createSelector(
  selectPermissions,
  selectPathname,
  selectUser,
  (permissions, pathname, user) => {

    const left = [];
    const right = [];

    if (user && user.type === 'Internal') {

      left.push({
        key: 'jobs',
        title: 'Jobs',
        href: '/portal/jobs',
        selected: pathname && pathname.startsWith('/portal/jobs')
      });

      left.push({
        key: 'clients',
        title: 'Clients',
        href: '/portal/clients',
        selected: pathname && pathname.startsWith('/portal/clients')
      });

    }


    if (user && user.type === 'Client') {
  
      left.push({
        key: 'jobs',
        title: 'Jobs',
        href: `/portal/jobs`,
        selected: pathname && pathname.startsWith('/portal/jobs')
      });

    }
    
    
    return { left, right };
  }
)