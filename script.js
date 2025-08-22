let timer = 60;
        let score = 0;
        let hit;
        let timerInterval;
        let music = document.getElementById('bg-music');
        let isBlackBackground = false;
        let isMusicPlaying = false;

        function startTimer() {
            timerInterval = setInterval(() => {
                if (timer >= 0) {
                    document.querySelector(".timer").textContent = timer;
                    timer--;
                } else {
                    clearInterval(timerInterval);
                    document.querySelector(".content").innerHTML = "";
                    document.querySelector(".alert").style.display = "block";
                    document.querySelector(".start-button").style.display = "block";
                    music.pause();
                    isMusicPlaying = false;
                    document.querySelector(".music-toggle").textContent = "Play Music";
                }
            }, 1000);
        }

        function generateBubbles() {
            let bubbles = "";
            const maxBubbles = 80;
            for (let i = 0; i < maxBubbles; i++) {
                let num = Math.floor(Math.random() * 10);
                bubbles += `<div class="box">${num}</div>`;
            }
            document.querySelector(".content").innerHTML = bubbles;
        }

        function updateHit() {
            hit = Math.floor(Math.random() * 10);
            document.querySelector(".hit").textContent = hit;
            generateBubbles();
        }

        function increaseScore() {
            score += 10;
            document.querySelector(".sco").textContent = score;
        }

        document.querySelector(".content").addEventListener("click", (event) => {
            if (event.target.classList.contains("box")) {
                const clickedNumber = Number(event.target.textContent);
                if (clickedNumber === hit) {
                    increaseScore();
                    updateHit();
                } else {
                    generateBubbles();
                }
            }
        });

        function startGame() {
            document.querySelector('.buble').style.display = 'block';
            document.querySelector('.start-button').style.display = 'none';
            timer = 60;
            score = 0;
            document.querySelector(".timer").textContent = 60;
            document.querySelector(".sco").textContent = 0;
            document.querySelector(".alert").style.display = "none";
            startTimer();
            updateHit();
            music.play();
            isMusicPlaying = true;
            document.querySelector(".music-toggle").textContent = "Mute Music";
        }

        function toggleBackground() {
            isBlackBackground = !isBlackBackground;
            document.body.style.background = isBlackBackground ? '#000000' : '#ffffff';
        }

        function toggleMusic() {
            if (isMusicPlaying) {
                music.pause();
                isMusicPlaying = false;
                document.querySelector(".music-toggle").textContent = "Play Music";
            } else {
                music.play();
                isMusicPlaying = true;
                document.querySelector(".music-toggle").textContent = "Mute Music";
            }
        }

        document.querySelector('.buble').style.display = 'none';