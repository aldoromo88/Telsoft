const Hello = resolve => require(['../components/Hello'], resolve);
const Clients = resolve => require(['../modules/clients/clientBrowse'], resolve);


export default [
    { path: '/', name: 'Hello', component: Hello, meta: { ShowInMenu: true, Display: 'Home', Icon: 'fa-home' } },
    { path: '/Clients/:Mode?/:Id?', component: Clients },
    { path: '/Clients', redirect: '/Clients/All', component: Clients, meta: { ShowInMenu: true, Display: 'Clientes', Icon: 'fa-people' } },
];
