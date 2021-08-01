import EuroMatches  from './EuroMatches.js';

export default class OctavosFinal extends EuroMatches {
  constructor(name,teams = [], config)
  {
  super(name, teams, config); 
  //console.log(teams) 
  }
  
  setup(config) {
    const defaultConfig = { 
      rounds: 1, 
      gol: 0, 
    }
    this.config = Object.assign(defaultConfig, config)
  }
  customizeTeam(teamName) {
    //llamar al metodo padre 
    const customizeTeam = super.customizeTeam(teamName);
    return {
      points:0,
      ...customizeTeam
    }
  } 
    // goals () {
    //   return Math.floor(Math.round() * 4);
    // }
// play(match) {
//   const homeGoals = this.goals(); 
//   const awayGoals = this.goals(); 
//   return {
//     homeTeamName: match.home,
//     homeGoals,
//     awayTeamName: match.away,
//     awayGoals
//   }
// }

}