// assets
import { IconHierarchy, IconBuildingStore, IconKey } from '@tabler/icons'

// constant
const icons = { IconHierarchy, IconBuildingStore, IconKey }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'chatflows',
            title: 'Chatflows',
            type: 'item',
            url: '/chatflows',
            icon: icons.IconHierarchy,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: 'Marketplaces',
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'apikey',
            title: 'API Keys',
            type: 'item',
            url: '/apikey',
            icon: icons.IconKey,
            breadcrumbs: true
        }
    ]
}

export default dashboard
