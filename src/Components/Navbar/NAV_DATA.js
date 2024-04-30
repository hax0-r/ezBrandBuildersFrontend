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
const TalkToUs = {
    title: "Talk To Us",
    path: "https:/Wa.me/+923201091220"
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

const CLOUD_SERVICES = ServicesData.filter(service => service.category === "Cloud Services")
    .map(({ title }) => ({
        title: title,
        path: `${servicesLinks}${title}`
    }));

const SOFTWARE_DEVELOPMENT = ServicesData.filter(service => service.category === "Software Development")
    .map(({ title }) => ({
        title: title,
        path: `${servicesLinks}${title}`
    }));

const TECHNOLOGY = ServicesData.filter(service => service.category === "Technology Training")
    .map(({ title }) => ({
        title: title,
        path: `${servicesLinks}${title}`
    }));
    
const SEO = ServicesData.filter(service => service.category === "seo")
    .map(({ title }) => ({
        title: title,
        path: `${servicesLinks}${title}`
    }));


export {
    NAV_DATA,
    TalkToUs,
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
