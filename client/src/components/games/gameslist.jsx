import UserNavbar from "../global/UserNavbar";
import "../../css/games/games.css";    
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

export default function Gameslist() {
    const navigate = useNavigate();

    return (
        <>
        <UserNavbar/>
            <div className="gameslist-container">
                <div className="gamebox-container">
                    <div className="gamebox">
                        Game 1
                        <div className="gamebox2">
                        <img src="/images/2048.png" alt="2048" />
                        </div>
                        <div>
                        <Button variant="contained" onClick={() => {navigate('/games/game1')}}>
                          PLAY GAME
                        </Button>
                        </div>
                       
                    </div>
                    <div className="gamebox">
                        Game 2
                        <div className="gamebox2">
                            <img src="/images/Tenzies.png" alt="Tenzies" />
                        </div>
                        <div>
                        <Button variant="contained" onClick={() => {navigate('/games/game2')}}>
                          PLAY GAME
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}