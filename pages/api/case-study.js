import { Client } from "../../prismic-configuration";
import Prismic from "@prismicio/client";

export const fetchCaseStudies = async () => {
    let studies = await Client().query(
        Prismic.Predicates.at("document.type", "case-study"), { orderings : '[my.case-study.ordernumber]' })
    ;
    console.log(studies.results);
    return studies.results;
};

export const getStudyByUID = async (uid) => { 
    return await Client().getByUID("case_study", uid);
};

export const getAbout = async () => {
    return await getPage("about");
};

export const getGallery = async () => {
    return await getPage("gallery");
};

export const getIndex = async () => {
    return await getPage("index");
};


const getPage = async (pageName) => {
    let page = await Client().query(
        Prismic.Predicates.at("document.type", pageName)
    );
    return page.results[0];
};