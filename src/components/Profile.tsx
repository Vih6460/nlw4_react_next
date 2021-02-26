import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            {/* <img src="https://github.com/vih6460.png" alt="Vinicius Oliveira"/> */}
            <img src="21004058.png" alt="Vinicius Oliveira"/>
            <div>
                <strong>Vamos se exercitar ?</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}