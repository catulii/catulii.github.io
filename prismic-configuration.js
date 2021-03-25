import Prismic from "@prismicio/client";

export const apiEndpoint = 'https://catalinaberretta.cdn.prismic.io/api/v2';
export const accessToken = 'MC5ZRlQwZlJNQUFDRUFGYWdB.77-977-9Iu-_ve-_ve-_ve-_vXPvv703WUoo77-977-977-9WUjvv73vv70p77-9Xhrvv70W77-977-977-9Xjnvv70'
// export const accessToken = process.env.PRISMIC_API_TOKEN;

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {};
    const accessTokenOption = prismicAccessToken
        ? { accessToken: prismicAccessToken }
        : {};
    return {
        ...reqOption,
        ...accessTokenOption,
    };
};
