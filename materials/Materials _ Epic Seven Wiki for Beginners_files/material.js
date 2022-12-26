
// start app
new Vue({

    el: '#app',
    data: {
        materials: MATERIALS,
        searchMaterial: '',
        selectedRarity: 'All',
        rarities: ['All', 'Normal', 'Upgrade'],
        horoscope: ['All', 'Aquarius', 'Aries', 'Cancer', 'Capricorn', 'Gemini', 'Leo', 'Libra', 'Pisces', 'Sagittarius', 'Scorpio', 'Taurus', 'Virgo'],
        selectedSign: 'All'
    },
    methods: {
        selectRarity(x) {
            this.selectedRarity = x;
        },
        selectSign(x) {
            this.selectedSign = x;
        }
    },
    computed: {
        filteredMaterials() {
            return this.materials
                .filter(material => {
                    return material.name.toLowerCase().indexOf(this.searchMaterial.toLowerCase()) > -1
                })
                .filter(material => {
                    if (this.selectedRarity != 'All') {
                        return material.type.indexOf(this.selectedRarity) > -1
                    } else {
                        return material
                    }
                })
                .filter(material => {
                    if (this.selectedSign != 'All') {
                        if (material.horoscope) {
                        return material.horoscope.indexOf(this.selectedSign) > -1
                        } else {
                            return null
                        }
                    } else {
                        return material
                    }
                })
    
        },
    },
    mounted: function () {
        // this.monsters.forEach(function (element) {
        //     element.cores = JSON.parse(element.cores);
        // });
        // this.material.stats.c = JSON.parse(this.material.stats.c);
    }

});