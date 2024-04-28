import React, { useEffect } from 'react';
import "./textAnimation.css";
import gsap from 'gsap';

const TextAnimation = ({ firstLine, secondLine, thirdLine }) => {

    useEffect(() => {
        const animationInitialized = sessionStorage.getItem('animationInitialized');

        if (!animationInitialized) {
            gsap.from(".word", {
                y: 100,
                delay: 3.2,
                stagger: {
                    // each: 0.01
                }
            });
            gsap.from(".word2", {
                y: 100,
                delay: 3.2,
                stagger: {
                    // each: 0.01
                }
            });
            gsap.from(".word3", {
                y: 100,
                delay: 3.2,
                stagger: {
                    // each: 0.01
                }
            });
            sessionStorage.setItem('animationInitialized', true);
        }

        return () => {
            gsap.killTweensOf(".word");
            gsap.killTweensOf(".word2");
            gsap.killTweensOf(".word3");
        };
    }, []);

    const renderWords = (words, className) => {
        return words.split('').map((word, index) => {
            return word === ' ' ? <div key={index} className={className}>&nbsp;</div> : <div key={index} className={className}>{word}</div>
        });
    };

    return (
        <>
            <div className="textAnimation" style={{ overflow: 'hidden', color: '#fff' }}>
                <div style={{ display: 'flex' }}>
                    {renderWords(firstLine, 'word')}
                </div>
            </div>
            <div className="textAnimation" style={{ overflow: 'hidden', color: '#fff' }}>
                <div style={{ display: 'flex' }}>
                    {renderWords(secondLine, 'word2')}
                </div>
            </div>
            <div className="textAnimation" style={{ overflow: 'hidden', color: '#fff' }}>
                <div style={{ display: 'flex' }}>
                    {renderWords(thirdLine, 'word3')}
                </div>
            </div>
        </>
    );
};

export default TextAnimation;
