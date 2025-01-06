import "../style/Dashboard.css"
import { IonIcon } from "@ionic/react";
import {
    eyeOutline,
    peopleOutline,
    analyticsOutline,
    cashOutline,
} from "ionicons/icons";

export function Dashboard() {
    return (
        <div className="main">
            {/* Main Content */}
            <main className="main-content p-4">
                <div className="cardBox">
                    <div className="card">
                        <div>
                            <div className="numbers">11,504</div>
                            <div className="cardName">Daily Amount</div>
                        </div>
                        <div className="iconBx">
                            <IonIcon icon={analyticsOutline} />
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">80</div>
                            <div className="cardName">Monitoring</div>
                        </div>
                        <div className="iconBx">
                            <IonIcon icon={eyeOutline} />
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">284</div>
                            <div className="cardName">Staff</div>
                        </div>
                        <div className="iconBx">
                            <IonIcon icon={peopleOutline} />
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">$7,842</div>
                            <div className="cardName">Earning</div>
                        </div>
                        <div className="iconBx">
                            <IonIcon icon={cashOutline} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
