
// start app
new Vue({

    el: '#app',
    data: {
        artifacts: ARTIFACTS,
        searchArtifact: '',
        selectedRarity: 'All',
        selectedClass: 'All',
        classes: ['All', 'Knight', 'Warrior', 'Mage', 'Ranger', 'Soul Weaver', 'Thief'],
        rarities: ['All', '3', '4', '5']
    },
    methods: {
        selectRarity(x) {
            this.selectedRarity = x;
        },
        selectClass(x) {
            this.selectedClass = x;
        },
    },
    computed: {
        filteredArtifacts() {
            return this.artifacts
                .filter(artifact => {
                    return artifact.name.toLowerCase().indexOf(this.searchArtifact.toLowerCase()) > -1
                })
                .filter(artifact => {
                    if (this.selectedRarity != 'All') {
                        return artifact.rarity.indexOf(this.selectedRarity) > -1
                    } else {
                        return artifact
                    }
                })
                .filter(artifact => {
                    if (this.selectedClass != 'All') {
                        return artifact.class.indexOf(this.selectedClass) > -1
                    } else {
                        return artifact
                    }
                })
        },
    },
    mounted: function () {
        // this.monsters.forEach(function (element) {
        //     element.cores = JSON.parse(element.cores);
        // });
        // this.artifact.stats.c = JSON.parse(this.artifact.stats.c);
    }

});