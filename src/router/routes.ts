import HomePage from '@/pages/home'
import SolutionsPage from '@/pages/solutions'
import DataIntegrationPage from '@/pages/solutions/data-integration'
import DataAnalyticsPage from '@/pages/solutions/data-analytics'
import DataGovernancePage from '@/pages/solutions/data-governance'
import DataMigrationPage from '@/pages/solutions/data-migration'
import PlatformPage from '@/pages/platform'
import IndustrySectorsPage from '@/pages/industry-sector'
import DapDataQualityPage from '@/pages/dap-data-quality'
import ResourcesPage from '@/pages/resources'
import PartnersPage from '@/pages/partners'
import AboutPage from '@/pages/about'

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/solutions',
        name: 'Solutions',
        component: SolutionsPage
    },
    {
        path: '/solutions/data-integration',
        name: 'Data Integration',
        component: DataIntegrationPage
    },
    {
        path: '/solutions/data-analytics',
        name: 'Data Analytics',
        component: DataAnalyticsPage
    },
    {
        path: '/solutions/data-governance',
        name: 'Data Governance',
        component: DataGovernancePage
    },
    {
        path: '/solutions/data-migration',
        name: 'Data Migration',
        component: DataMigrationPage
    },
    {
        path: '/platform',
        name: 'Platform',
        component: PlatformPage
    },
    {
        path: '/industry-sectors',
        name: 'Industry Sectors',
        component: IndustrySectorsPage
    },
    {
        path: '/dap-data-quality',
        name: 'SAP Data Quality',
        component: DapDataQualityPage
    },
    {
        path: '/resources',
        name: 'Resources',
        component: ResourcesPage
    },
    {
        path: '/partners',
        name: 'Partners',
        component: PartnersPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
]