cccccsss
        let images = {
            'A': 'https://www.shutterstock.com/shutterstock/photos/1732505888/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-a-letter-1732505888.jpg',
            'B': 'https://www.shutterstock.com/shutterstock/photos/1732506950/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-b-letter-1732506950.jpg',
            'C': 'https://www.shutterstock.com/shutterstock/photos/1732507184/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-c-letter-1732507184.jpg',
            'D': 'https://www.shutterstock.com/shutterstock/photos/1872053071/display_1500/stock-vector-the-letter-d-universal-and-turkish-handicapped-hand-alphabet-letter-d-disabled-hand-hand-tongue-1872053071.jpg',
            'E': 'https://www.shutterstock.com/shutterstock/photos/1732507778/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-e-letter-1732507778.jpg',
            'F': 'https://www.shutterstock.com/shutterstock/photos/1732508045/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-f-letter-1732508045.jpg',
            'G': 'https://www.shutterstock.com/shutterstock/photos/1732508546/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-g-letter-1732508546.jpg',
            'H': 'https://www.shutterstock.com/shutterstock/photos/1732508897/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-h-letter-1732508897.jpg',
            'I': 'https://www.shutterstock.com/shutterstock/photos/1732509245/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-i-letter-1732509245.jpg',
            'J': 'https://www.shutterstock.com/shutterstock/photos/1732509527/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-j-letter-1732509527.jpg',
            'K': 'https://www.shutterstock.com/shutterstock/photos/1732509761/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-k-letter-1732509761.jpg',
            'L': 'https://www.shutterstock.com/shutterstock/photos/1732510184/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-l-letter-1732510184.jpg',
            'M': 'https://www.shutterstock.com/shutterstock/photos/1732510688/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-m-letter-1732510688.jpg',
            'N': 'https://www.shutterstock.com/shutterstock/photos/1732511099/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-n-letter-1732511099.jpg',
            'O': 'https://www.shutterstock.com/shutterstock/photos/1732511423/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-o-letter-1732511423.jpg',
            'P': 'https://www.shutterstock.com/shutterstock/photos/1732511786/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-p-letter-1732511786.jpg',
            'Q': 'https://thumbs.dreamstime.com/z/alphabet-letter-q-sign-language-deaf-fingerspelling-american-sign-language-asl-hand-gesture-letter-q-white-187333908.jpg?ct=jpeg',
            'R': 'https://thumbs.dreamstime.com/z/alphabet-letter-r-sign-language-deaf-fingerspelling-american-sign-language-asl-hand-gesture-letter-r-white-187333941.jpg?ct=jpeg',
            'S': 'https://www.shutterstock.com/shutterstock/photos/1732512248/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-s-letter-1732512248.jpg',
            'T': 'https://www.shutterstock.com/shutterstock/photos/1732512443/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-tletter-1732512443.jpg',
            'U': 'https://www.shutterstock.com/shutterstock/photos/1732512698/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-uletter-1732512698.jpg',
            'V': 'https://www.shutterstock.com/shutterstock/photos/1732513361/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-vletter-1732513361.jpg',
            'W': 'https://www.shutterstock.com/shutterstock/photos/1732513514/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-wletter-1732513514.jpg',
            'X': 'https://www.shutterstock.com/shutterstock/photos/1732513919/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-xletter-1732513919.jpg',
            'Y': 'https://www.shutterstock.com/shutterstock/photos/1732514252/display_1500/stock-photo-hand-pose-symbol-american-sign-language-asl-design-for-y-letter-1732514252.jpg',
            'Z': 'https://thumbs.dreamstime.com/z/american-sign-language-letter-z-female-hand-showing-isolated-white-background-230163714.jpg?ct=jpeg'
        };

        function showSign() {
            let letter = document.getElementById("letterInput").value.toUpperCase();
            let image = document.getElementById("signImage");
            
            if (images[letter]) {
                image.src = images[letter];
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        }

        function clearInput() {
            document.getElementById("letterInput").value = "";
            document.getElementById("signImage").style.display = "none";
        }

        function showRandomSign() {
            let keys = Object.keys(images);
            let randomKey = keys[Math.floor(Math.random() * keys.length)];
            document.getElementById("letterInput").value = randomKey;
            showSign();
        }