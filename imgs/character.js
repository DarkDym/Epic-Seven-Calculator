// start app
new Vue({

    el: '#app',
    data: {
        characters: CHARACTERS,
        searchCharacter: '',
        selectedRarity: 'All',
        selectedClass: 'All',
        selectedSign: 'All',
        selectedElement: 'All',
        rarities: ['All', '3', '4', '5'],
        classes: ['All', 'Knight', 'Warrior', 'Mage', 'Ranger', 'Soul Weaver', 'Thief'],
        horoscope: ['All', 'Aquarius', 'Aries', 'Cancer', 'Capricorn', 'Gemini', 'Leo', 'Libra', 'Pisces', 'Sagittarius', 'Scorpio', 'Taurus', 'Virgo'],
        elements: ['All', 'Fire', 'Ice', 'Earth', 'Light', 'Dark'],
    
        userRating: {
            world: 0,
            abyss: 0,
        }
    },
    methods: {
        selectElement(x) {
            this.selectedElement = x;
        },
        selectRarity(x) {
            this.selectedRarity = x;
        },
        selectClass(x) {
            this.selectedClass = x;
        },
        selectSign(x) {
            this.selectedSign = x;
        },
        getOverall(ratings) {
            overall = ((parseFloat(ratings.world) + parseFloat(ratings.arena) + parseFloat(ratings.boss) + parseFloat(ratings.raid))/4).toFixed(1);
            return overall;
        }
    },
    computed: {
        filteredCharacters() {
            return this.characters
                .filter(character => {
                    return character.name.toLowerCase().indexOf(this.searchCharacter.toLowerCase()) > -1
                })
                .filter(character => {
                    if (this.selectedRarity != 'All') {
                        return character.rarity.indexOf(this.selectedRarity) > -1
                    } else {
                        return character
                    }
                })
                .filter(character => {
                    if (this.selectedClass != 'All') {
                        return character.class.indexOf(this.selectedClass) > -1
                    } else {
                        return character
                    }
                })
                .filter(character => {
                    if (this.selectedSign != 'All') {
                        return character.horoscope.indexOf(this.selectedSign) > -1
                    } else {
                        return character
                    }
                })
                .filter(character => {
                    if (this.selectedElement != 'All') {
                        return character.element.indexOf(this.selectedElement) > -1
                    } else {
                        return character
                    }
                })
        },
    },
    mounted: function () {
        // this.monsters.forEach(function (element) {
        //     element.cores = JSON.parse(element.cores);
        // });
        // this.character.stats.c = JSON.parse(this.character.stats.c);
    },

});