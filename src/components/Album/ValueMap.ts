export class ValueMap {
    static countsMap(counts: string): string {
        const countsLength = counts.length;        
        
        if(countsLength > 3 && countsLength < 7){
            let firstThreeChars = "";
            let lastChar = "";

            for (let i = 0; i < countsLength; i++) {
                firstThreeChars = counts.slice(0, i-1).toString()
                lastChar = firstThreeChars[firstThreeChars.length-1];
            }

            return `${firstThreeChars.slice(0, firstThreeChars.length-1)}.${lastChar}к`;
        }

        if(countsLength > 6 && countsLength < 10){
            let firstThreeChars = "";
            let lastChar = "";            

            for (let i = 0; i < countsLength; i++) {
                firstThreeChars = counts.slice(0, i-4).toString()
                lastChar = firstThreeChars[firstThreeChars.length-1];
            }

            return `${firstThreeChars.slice(0, firstThreeChars.length-1)}.${lastChar}кк`;
        }

        if(countsLength > 9){
            let firstThreeChars = "";
            let lastChar = "";            

            for (let i = 0; i < countsLength; i++) {
                firstThreeChars = counts.slice(0, i-7).toString()
                lastChar = firstThreeChars[firstThreeChars.length-1];
            }

            return `${firstThreeChars.slice(0, firstThreeChars.length-1)}.${lastChar}ккк`;
        }

        return counts;
    }
}