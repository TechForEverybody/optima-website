import HomePage from '@/pages/home'
import SolutionsPage from '@/pages/solutions'
import DataQualityAssessmentPage from '@/pages/solutions/data-quality-assessment'
import DataQualityMonitoringPage from '@/pages/solutions/data-quality-monitoring'
import DataIssueRemediationPage from '@/pages/solutions/data-issue-remediation'
import DataGovernanceEnablementPage from '@/pages/solutions/data-governance-enablement'
import PlatformPage from '@/pages/platform'
import IndustrySectorsPage from '@/pages/industry-sector'
import DapDataQualityPage from '@/pages/dap-data-quality'
import ResourcesPage from '@/pages/resources'
import PartnersPage from '@/pages/partners'
import AboutPage from '@/pages/about'
import ContactPage from '@/pages/contact'
import NotFound from '@/pages/NotFound'

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
        path: '/solutions/data-quality-assessment',
        name: 'Data Quality Assessment',
        component: DataQualityAssessmentPage
    },
    {
        path: '/solutions/data-quality-monitoring',
        name: 'Data Quality Monitoring',
        component: DataQualityMonitoringPage
    },
    {
        path: '/solutions/data-issue-remediation',
        name: 'Data Issue Remediation',
        component: DataIssueRemediationPage
    },
    {
        path: '/solutions/data-governance-enablement',
        name: 'Data Governance Enablement',
        component: DataGovernanceEnablementPage
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
    {
        path:"/contact",
        name:"Contact",
        component: ContactPage
    },
    {
        path:"*",
        redirect:"/not-found",
        component:NotFound
    }
]