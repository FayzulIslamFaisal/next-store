import { getServerSession } from "next-auth/next";
import {authOptions} from '../api/auth/[...nextauth]/route';


const ABC = async () => {
    const session = await getServerSession(authOptions);
    return <pre>
        {JSON.stringify(session, null, 4)}

    </pre>;
};

export default ABC;
