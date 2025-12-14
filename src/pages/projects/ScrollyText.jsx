import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const container = useRef();
    // On utilise une ref pour le "train" de diapositives qui va bouger
    const slider = useRef();

    useGSAP(() => {
        // On calcule la largeur totale à parcourir
        // (Largeur totale du slider - Largeur de l'écran)
        const totalWidth = slider.current.scrollWidth - window.innerWidth;

        gsap.to(slider.current, {
            x: -totalWidth, // On tire le slider vers la gauche
            ease: "none",   // Pas d'accélération, mouvement linéaire

            scrollTrigger: {
                trigger: container.current,
                pin: true,     // BLOQUE tout l'écran
                scrub: 1,      // Lie à la molette (avec fluidité)
                // La durée du "blocage" dépend de la largeur du contenu à faire défiler
                end: () => "+=" + totalWidth,
                markers: true // À retirer plus tard
            }
        });

    }, { scope: container });

    const styles = {
        wrapper: {
            overflow: 'hidden', // Cache ce qui dépasse
            width: '100%',
            height: '100vh'     // Prend tout l'écran
        },
        sliderContainer: {
            display: 'flex',    // Met les éléments côte à côte
            width: '400vw',     // TRÈS LARGE (4 fois l'écran ici pour 4 panneaux)
            height: '100vh'
        },
        panel: {
            width: '100vw',     // Chaque panneau fait la taille de l'écran
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white'
        }
    };

    return (
        <div ref={container} style={styles.wrapper}>

            {/* C'est ce conteneur qui va glisser vers la gauche */}
            <div ref={slider} className="slider" style={styles.sliderContainer}>

                <div style={{...styles.panel, background: '#e74c3c'}}>
                    1. SCROLLEZ VERS LE BAS
                </div>

                <div style={{...styles.panel, background: '#3498db'}}>
                    2. MAIS JE BOUGE...
                </div>

                <div style={{...styles.panel, background: '#9b59b6'}}>
                    3. VERS LA GAUCHE !
                </div>

                <div style={{...styles.panel, background: '#2ecc71'}}>
                    4. FINI.
                </div>

            </div>
        </div>
    );
};

export default HorizontalScroll;