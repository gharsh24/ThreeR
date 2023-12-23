
import "./dashboard.css"
import Card from 'react-bootstrap/Card';

function UserDashboard(){
    return<div className="dashboard">
        <div className="dash-heading">
        <h1>Dashboard</h1> 
        </div>
        <div className='dashbody'>
        
        <Card style={{ width: '22rem', height:'7.5rem', backgroundImage:`url('https://t3.ftcdn.net/jpg/04/56/00/16/360_F_456001627_vYt7ZFjxEQ1sshme67JAXorKRPo8gsfN.jpg')`, backgroundSize:'cover'}}>
            <Card.Body>
                <Card.Title>Your Points</Card.Title>
                <Card.Text>300</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '22rem', height: '7.5rem', backgroundImage:`url('https://t3.ftcdn.net/jpg/04/56/00/16/360_F_456001627_vYt7ZFjxEQ1sshme67JAXorKRPo8gsfN.jpg')` ,backgroundSize:'cover'}}>
            <Card.Body>
                <Card.Title>Tasks Completed</Card.Title>
                <Card.Text>10</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '22rem', height: '7.5rem', backgroundImage:`url('https://t3.ftcdn.net/jpg/04/56/00/16/360_F_456001627_vYt7ZFjxEQ1sshme67JAXorKRPo8gsfN.jpg')` ,backgroundSize:'cover'}}>
            <Card.Body>
                <Card.Title>Tasks Completed</Card.Title>
                <Card.Text>10</Card.Text>
            </Card.Body>
        </Card> 
        </div>
        <div className="dash-heading">
        <h1>Point History</h1> 
        </div>
        <div className="point-history">
            <div className="points">5</div>
            <div className="actions"></div>
        </div>
    </div> 
}

export default UserDashboard;




    
