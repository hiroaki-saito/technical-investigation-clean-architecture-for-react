import "reflect-metadata";


// interfaceç¾¤
interface User {
    id: number,
    name: string,
}

interface UserApiInterface {
    fetchUser: (id: number) => {}
}