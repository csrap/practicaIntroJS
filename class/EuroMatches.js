
export default class EuroMatches {

  constructor (name, teams = [], config = {}) 
  {
    this.name = name; 
    this.matchDaySchedule = [];
    this.winOctavosFinal = [];
    this.matchQuarterFinal = []; 
    this.matchSemiFinal = []; 
    this.winSemiFinal = []; 
    this.matchFinals = [];
    this.winFinals = [];
    this.setup(config); 
    this.setupTeams(teams); 
    
  }

  setup(config) {
    const defaultConfig = { rounds:1}
    this.config = Object.assign(defaultConfig, config)
  }

  setupTeams(teamNames) {
  this.teams = []; 
  for (const  teamName of teamNames) {
    const team = this.customizeTeam(teamName)
    this.teams.push(team); 
  }
  }
customizeTeam(teamName) {
  return {
    name: teamName, 
  }
}

selectTeams(teams) { 
  const numberMatchesPerMatchDay = this.teams.length / 2; 
  const matchDay = [];  //jornadas 
    for (let j = 0; j < numberMatchesPerMatchDay; j++) {
        const match =  {home:'A', away:'B'} ; //partido 
        matchDay.push(match); 
        }
        //para generar los partidos
        this.matchDaySchedule.push(matchDay) // añadimos la jornada 

}

groupOne() {
  const teamNames = this.teams.map(team => team.name); 
  let teamIndex = 0; 
  const maxHomeTeams = this.teams.length; 
  this.matchDaySchedule.forEach(matchDay => {
    matchDay.forEach(match => {
      match.home = teamNames[teamIndex]; 
      teamIndex++; 
      if (teamIndex > maxHomeTeams) {
        teamIndex = 0; 
      }
    })
  })
}

groupTwo() {
  const teamNames = this.teams.map(team => team.name); 
  let teamIndex = 8; 
  const maxawayTeams = this.teams.length; 
  this.matchDaySchedule.forEach(matchDay => {
    matchDay.forEach(match => {
      match.away = teamNames[teamIndex]; 
      teamIndex++; 
      if (teamIndex > maxawayTeams) {
        teamIndex = 8; 
      }
    })
  })
}

playEuro() {
  console.log('===================================')
    console.log(`========OCTAVOS DE FINAL==========`)
    console.log('==================================')
  this.winOctavosFinal = []; 
  for (const matchDay of this.matchDaySchedule) {
    const resultsTeam = {
      results: [], 
    }
    for (const match of matchDay) {
      const result = this.play(match);
      const goals2 = this.goals2(); 
      
      while (result.homeGoals === result.awayGoals) {
        //const result2 = this.goals2();
        result.homeGoals += this.goals2();
        result.awayGoals += this.goals2();
      } //else {this.WinOctavos(result); }
      this.WinOctavos(result);
      //console.log(result); 
      
      if (result.homeGoals > result.awayGoals) { 
        //console.log(`======PASA A CUARTOS===> ${result.homeTeamName}`);
        resultsTeam.results.push(result.homeTeamName); 
        //result.homeTeamName; 
      } else if (result.awayGoals > result.homeGoals){
        resultsTeam.results.push(result.awayTeamName);
        //console.log(`======PASA A CUARTOS ===> ${result.awayTeamName}`); 
      } else {
        console.log('Empate')
      }


    }
    this.winOctavosFinal.push(resultsTeam)
    //console.log(this.winOctavosFinal[0].results)
  }
}

selectOctavos() {
  const quarterFinalPlays = this.winOctavosFinal[0].results.length - 7; 
  const quarterFinalMatchPlays = this.winOctavosFinal[0].results.length / 8;
  const P1 = this.winOctavosFinal[0].results;
  const  Q1team = P1[0]; 
  const  Q8team = P1[7]; 
  const  Q2team = P1[6]; 
  const  Q7team = P1[1]; 
  const  Q3team = P1[2]; 
  const  Q6team = P1[5]; 
  const  Q4team = P1[4]; 
  const  Q5team = P1[3]; 
  
  for (let i = 0; i < quarterFinalPlays; i++) {
    const matchQuarter = [];
    for (let j = 0; j < quarterFinalMatchPlays; j++) {
      const matchQuarterPlay = {home: Q1team,  away: Q8team};
      const matchQuarterPlay1 = {home:Q7team, away: Q2team};
      const matchQuarterPlay2 = {home:Q3team, away:Q6team};
      const matchQuarterPlay3 = {home:Q5team, away:Q4team};
      matchQuarter.push(matchQuarterPlay, matchQuarterPlay1,matchQuarterPlay2, matchQuarterPlay3);
    }
    this.matchQuarterFinal.push(matchQuarter)
    //console.log(matchQuarter)   
  }
}

playQuarterFinal(){
  console.log('===================================')
    console.log(`========CUARTOS DE FINAL==========`)
    console.log('==================================')
  this.winQuarterFinal = []; 
  for (const matchQuarter of this.matchQuarterFinal) {
    const resultsTeamQuarter = {
      resultsQuarter: [], 
    }
    for (const matchQuarterPlay of matchQuarter) {
      const resultQuarter= this.playQuarter(matchQuarterPlay);
      //console.log(resultQuarter);
      const goals3 = this.goals3();
      
      while (resultQuarter.homeGoals === resultQuarter.awayGoals) {
        //const result2 = this.goals2();
        resultQuarter.homeGoals += this.goals3();
        resultQuarter.awayGoals += this.goals3();
      } //else {this.WinOctavos(result); }

      this.WinQuarter(resultQuarter);

      if (resultQuarter.homeGoals > resultQuarter.awayGoals) { 
        //console.log(`======PASA A SEMI-FINAL===> ${resultQuarter.homeTeamName}`);
        resultsTeamQuarter.resultsQuarter.push(resultQuarter.homeTeamNameQuarter); 
        //result.homeTeamName; 
      } else if (resultQuarter.awayGoals > resultQuarter.homeGoals){
        resultsTeamQuarter.resultsQuarter.push(resultQuarter.awayTeamNameQuarter);
        //console.log(`======PASA A CUARTOS ===> ${result.awayTeamName}`); 
      } else {
        //console.log('Empate')
      }
      
    }
    this.winQuarterFinal.push(resultsTeamQuarter);
  }
}

selectQuarter() {
  const semiFinalPlays = this.winQuarterFinal[0].resultsQuarter.length - 3;
  const semiFinalMatchPlays = this.winQuarterFinal[0].resultsQuarter.length -3;
  const P2 = this.winQuarterFinal[0].resultsQuarter;
  // console.log(semiFinalPlays); 
  // console.log(P2); 
  const  Q9team = P2[0];
  const  Q10team = P2[1];
  const  Q11team = P2[2]; 
  const  Q12team = P2[3];

  for (let i = 0; i < semiFinalPlays; i++) {
    const matchSemi = []; 
    for (let j = 0; j < semiFinalMatchPlays; j++) {
      const matchSemiPlay = {home: Q9team,  away: Q11team};
      const matchSemiPlay2 = {home:Q10team, away: Q12team};
      matchSemi.push(matchSemiPlay, matchSemiPlay2); 
    }
    this.matchSemiFinal.push(matchSemi); 
    
  }
}
  playSemiFinal() {
    console.log('====================================')
    console.log(`============SEMI-FINAL==============`)
    console.log('====================================')
    this.winSemiFinal = []; 
    for (const matchSemi of this.matchSemiFinal) {
      const resultsTeamSemi = {
        resultsSemi: [], 
      }
      for (const matchSemiPlay of matchSemi) {
        const resultSemi= this.playSemi(matchSemiPlay);
        const goals4 = this.goals4();

        while (resultSemi.homeGoals === resultSemi.awayGoals) {
          //const result2 = this.goals2();
          resultSemi.homeGoals += this.goals4();
          resultSemi.awayGoals += this.goals4();
        } //else {this.WinOctavos(result); }
  
        this.winSemi(resultSemi);
        

        if (resultSemi.homeGoals > resultSemi.awayGoals) { 
          resultsTeamSemi.resultsSemi.push(resultSemi.homeTeamNameSemi); 
        } else if (resultSemi.awayGoals > resultSemi.homeGoals){
          resultsTeamSemi.resultsSemi.push(resultSemi.awayTeamNameSemi);
          
        } else {
          //console.log('Empate')
        }
        
      }
      this.winSemiFinal.push(resultsTeamSemi);
    }
  }
  
  selectFinals() {
    const FinalPlays = this.winSemiFinal[0].resultsSemi.length -1;
    const FinalMatchPlays = this.winSemiFinal[0].resultsSemi.length -1;
    const P3 = this.winSemiFinal[0].resultsSemi;
    // console.log(semiFinalPlays); 
    // console.log(P2); 
    const  Q13team = P3[0];
    const  Q14team = P3[1];
  
    for (let i = 0; i < FinalPlays; i++) {
      const matchFinal = []; 
      for (let j = 0; j < FinalMatchPlays; j++) {
        const matchFinalPlay = {home: Q13team,  away: Q14team};
        matchFinal.push(matchFinalPlay); 
      }
      this.matchFinals.push(matchFinal); 
    }
  }


  
  playFinal() {
    console.log('===============================')
    console.log(`============FINAL==============`)
    console.log('===============================')
    this.winFinals = []; 
    for (const matchFinal of this.matchFinals) {
      const resultsTeamFinal = {
        resultsFinal: [], 
      }
      for (const matchFinalPlay of matchFinal) {
        const resultFinal= this.playFinals(matchFinalPlay);
        const goals5 = this.goals5();

        while (resultFinal.homeGoals === resultFinal.awayGoals) {
          //const result2 = this.goals2();
          resultFinal.homeGoals += this.goals5();
          resultFinal.awayGoals += this.goals5();
        } //else {this.WinOctavos(result); }
  
        this.winFinal(resultFinal);

        if (resultFinal.homeGoals > resultFinal.awayGoals) { 
          resultsTeamFinal.resultsFinal.push(resultFinal.homeTeamNameFinal); 
        } else if (resultFinal.awayGoals > resultFinal.homeGoals){
          resultsTeamFinal.resultsFinal.push(resultFinal.awayTeamNameFinal);
          
        } else {
          //console.log('Empate')
        }
        
      }
      this.winFinals.push(resultsTeamFinal);
    }
  }

play(match) {
  throw new Error ('play is not implemented'); 
}
WinOctavos(result) {
  throw new Error ('play is not implemented'); 
}
playQuarter(matchQuarterPlay) {
  throw new Error ('play is not implemented'); 
}
playSemi(matchSemiPlay) {
  throw new Error ('play is not implemented'); 
}
playFinals(matchFinalPlay) {
  throw new Error ('play is not implemented'); 
}
}
