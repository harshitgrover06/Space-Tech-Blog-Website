import './single.css'
import Sidebar from '../../sidebar/Sidebar'
import Singlepost from '../Singlepost/Singlepost'

export default function Single() {
    return (
        <div>
            <div className="single">
                <Singlepost/>
                <Sidebar/>
            </div>
        </div>
    )
}
