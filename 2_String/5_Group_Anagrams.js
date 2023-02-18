const groupAnagrams = (strs) => {
    const hash={};
    for(let word of strs){
        let sorted_word=word.split("").sort().join("");
        if(sorted_word in hash){
            hash[sorted_word].push(word);
        }else{
            hash[sorted_word]=[word];
        }
    }
    return Object.values(hash);
  };
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) 
                        //[["bat"],["nat","tan"],["ate","eat","tea"]]


















                        // var groupAnagrams = function(strs) {
                        //     let ans=[];
                        //     let obj={};
                        //     let res={};
                        //     let minians=[];
                        //     for(let i=0;i<strs.length;i++){
                        //         let mult=1;
                        //         for(let j=0;j<strs[i].length;j++){
                        //             mult=(strs[i][j].charCodeAt()-96)*mult;
                        //             //console.log(strs[i][j].charCodeAt()-96)
                        //         }
                        //         obj[i]=mult;
                        //     }
                        //     //console.log(obj);
                        //     for(let i in obj){
                        //         //console.log(strs[i],obj[i])
                        //         res[strs[i]]=obj[i]
                        //     }
                        //     console.log(res);
                        //     return ans;
                        // };
                        //{ eat: 100, tea: 100, tan: 280, ate: 100, nat: 280, bat: 40 }