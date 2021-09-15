export const auth = {
    registration: () => '/registration',
    login: () => '/login'
};

export const common = {
    home: () => '/home',
    createLink: () => '/home/createLink',
    findLink: (id) => `/home/findLink/${id}`,
};