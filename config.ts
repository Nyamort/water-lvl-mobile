interface Config {
    [key: string]: string | undefined;
}

const env: Config = {
    API_URL: 'https://water-lvl-backend.vercel.app',
}

export default env;