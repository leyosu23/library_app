export const oktaConfig = {
    clientId: '0oa9nwyfu5G6Mnrdo5d7',
    issuer: 'https://dev-96798358.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}