// export const host = "http://localhost:5000";
export const host = "https://hun-han-server.vercel.app"; //connected to backend in vercel

export const loginRoute = `${host}/api/auth/login/`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;
