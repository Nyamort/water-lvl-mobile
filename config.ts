interface Config {
    [key: string]: string | undefined;
}

const env: Config = new Proxy(
    {},
    {
        get: (_, key: string) => process.env["EXPO_PUBLIC_"+key],
    }
);

export default env;