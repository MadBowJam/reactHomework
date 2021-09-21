import {Link} from "react-router-dom";

const Dashboard = () => (
        <div >
            <h1>Dashboard</h1>
            <Link to='/Albums' className='link'>Albums</Link>
            <Link to='/Users' className='link'>Users</Link>
        </div>
)

export default Dashboard;