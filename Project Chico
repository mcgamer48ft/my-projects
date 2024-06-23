// ==UserScript==
// @name         Krunker.io ESP
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ESP for Krunker.io
// @author       You
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the game to load
    function waitForGame() {
        if (typeof window.renderer !== 'undefined') {
            startESP();
        } else {
            setTimeout(waitForGame, 100);
        }
    }

    function startESP() {
        const renderer = window.renderer;

        function drawESP() {
            const players = renderer.game.players.list;

            for (const player of players) {
                if (player.isYou) continue; // Skip drawing for your own player

                const screenPos = renderer.renderEsp(player.x, player.y, player.z, player.height);
                if (screenPos) {
                    const width = 50;
                    const height = 10;
                    renderer.drawRectangle(screenPos.x - width / 2, screenPos.y - height / 2, width, height, 1, 0, 0);
                }
            }

            requestAnimationFrame(drawESP);
        }

        drawESP();
    }

    waitForGame();
})();
