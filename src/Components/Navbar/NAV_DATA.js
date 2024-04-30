import { ServicesData } from "../../Data/ServicesData"

const NAV_DATA = [
    {
        navTitle: "Home",
        navPath: "/"
    },
    {
        navTitle: "About",
        navPath: "/about"
    },
    // {
    //     navTitle: "Partners",
    //     navPath: "/partners"
    // },
    {
        navTitle: "Contact Us",
        navPath: "/contactUs"
    },
    {
        navTitle: "Blog",
        navPath: "/blog"
    },
    // {
    //     navTitle: "Pricing",
    //     navPath: "/pricing"
    // },
]
const SIGN_IN = {
    signTitle: "Talk To Us",
    signPath: "/signin"
}

let servicesLinks = "/services/ServicesCardPages/"


const WEB_DEVELOPMENT = ServicesData.filter(service => service.category === "Web Development")
    .map(({ title }) => ({
        title: title,
        path: `${servicesLinks}${title}`
    }));

const DIGITAL_MARKETING = ServicesData.filter(service => service.category === "Digital Marketing")
    .map(({ title }) => ({
        title: title,
        path: `${servicesLinks}${title}`
    }));

const graphic_designing = ServicesData.filter(service => service.category === "graphic designing")
    .map(({ title }) => ({
        title: title,
        path: `${servicesLinks}${title}`
    }));

const CYBER_SECURITY = ServicesData.filter(service => service.category === "CyberSecurity")
    .map(({ title }) => ({
        title: title,
        path: `${servicesLinks}${title}`
    }));

// const CYBER_SECURITY = [
//     {
//         title: "cloud security",
//         path: `${servicesLinks}cloud security`
//     },
//     {
//         title: "IOT Security",
//         path: `${servicesLinks}IoT Security`
//     },
//     {
//         title: "Firewall",
//         path: `${servicesLinks}Firewall`
//     },
//     {
//         title: "Software Testing",
//         path: `${servicesLinks}Software Testing`
//     },
//     {
//         title: "Application Security",
//         path: `${servicesLinks}Application Security`
//     },
// ]

const CLOUD_SERVICES = [
    {
        title: "Domain & Web Hosting",
        path: `${servicesLinks}Domain & Web Hosting`
    },
    {
        title: "SaaS",
        path: `${servicesLinks}SaaS`
    },
    {
        title: "Storage",
        path: `${servicesLinks}Storage`
    },
]

const SOFTWARE_DEVELOPMENT = [
    {
        title: "Artificial Intellegence",
        path: `${servicesLinks}Artificial Intellegence`
    },
    {
        title: "Web Application Deve...",
        path: `${servicesLinks}web application development`
    },
    {
        title: "Mobile Application De...",
        path: `${servicesLinks}mobile application development`
    },
    {
        title: "Custom Software Dev...",
        path: `${servicesLinks}custom software development`
    },
    {
        title: "DevOps",
        path: `${servicesLinks}DevOps`
    },
]

const TECHNOLOGY = [
    {
        title: "Technology Developm...",
        path: `${servicesLinks}Customize`
    },
]

const SEO = [
    {
        title: "Local SEO                          ",
        path: `${servicesLinks}Local SEO`
    },
    {
        title: "Link Building",
        path: `${servicesLinks}Link Building`
    },
    {
        title: "On Page SEO ",
        path: `${servicesLinks}On Page SEO`
    },
    {
        title: "Keyword Research",
        path: `${servicesLinks}Keyword Research`
    },
    {
        title: "Teachnical SEO",
        path: `${servicesLinks}Technical SEO`
    },
]

export {
    NAV_DATA,
    SIGN_IN,
    WEB_DEVELOPMENT,
    DIGITAL_MARKETING,
    CYBER_SECURITY,
    CLOUD_SERVICES,
    SOFTWARE_DEVELOPMENT,
    TECHNOLOGY,
    SEO,
    graphic_designing,
}
//                       
