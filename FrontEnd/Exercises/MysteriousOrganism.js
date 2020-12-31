

//Provided code
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)]
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
};

//Start here
let samples = [];
const pAequorFactory = (number, structure) => {
    return {
        specimenNum: number,
        dna: structure,
        mutate() {
            this.dna = this.dna.map(order => {
                let newOrder = returnRandBase();
                while (newOrder === order) {
                    newOrder = returnRandBase();
                }
                return newOrder;
            });
            return this.dna;
        },
        compareDna(other) {
            let count = 0;
            let i = 0;
            for(i; i < other.dna.length; i++) {
                if (this.dna[i] === other.dna[i]) {
                    count++;
                }
            }
            let percent = (count / 15) * 100;
            return `Between the two strands, there is a match of ${percent}%.`;
        },
        willLikelySurvive() {
            let count = 0;
            let i = 0;
            for(i; i < this.dna.length; i++) {
                if (this.dna[i] === "C" || this.dna[i] === "G") {
                    count++;
                }
            }
            let percent = (count / 15) * 100;
            return percent >= 60;
        }
    }
};

const sampleFiller = (sample) => {
    let i = 1;

    while (sample.length < 30) {
          let strand = pAequorFactory(i, mockUpStrand());
          if (strand.willLikelySurvive()) {
              sample.push(strand);
              i++
          }
    }
    return sample;
};

let strand1 = mockUpStrand();
let strand2 = mockUpStrand();

let sample1 = pAequorFactory(1, strand1);
let sample2 = pAequorFactory(2, strand2);
console.log(sample1.dna);

console.log(sample1.mutate());
console.log(sample1.dna);
console.log(sample2.dna);
console.log(sample1.compareDna(sample2));
console.log(sample1.willLikelySurvive());
console.log(sampleFiller(samples));
