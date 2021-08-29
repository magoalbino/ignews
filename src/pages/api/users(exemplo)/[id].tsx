import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query);

    const users = [
        { id: 1, name: 'Daniel'},
        { id: 2, name: 'Rodrigo'},
        { id: 3, name: 'Teste'},
    ]

    return response.json(users)
}