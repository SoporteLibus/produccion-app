import '../styles/home.css'
import Card from '../lib/Card'

export default function Home(){
    return (
    <div className="container">
        <Card image="/images/milacron.png" link="/milacron" >
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum itaque 
                mollitia dolorem quasi aperiam nam beatae iste voluptate quisquam ex, 
                inventore quibusdam? Id velit maxime perferendis a numquam illo magni.
            </p>
        </Card>
        <Card image="/images/bmb.png" link="/bmb" >
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum itaque 
                mollitia dolorem quasi aperiam nam beatae iste voluptate quisquam ex, 
                inventore quibusdam? Id velit maxime perferendis a numquam illo magni.
            </p>
        </Card>
        <Card image="/images/arburg.png" link="/arburg" >
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum itaque 
                mollitia dolorem quasi aperiam nam beatae iste voluptate quisquam ex, 
                inventore quibusdam? Id velit maxime perferendis a numquam illo magni.
            </p>
        </Card>
    </div>
    )
}