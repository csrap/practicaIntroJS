import {teams} from './teams.js'
import EuroMatches  from './class/EuroMatches.js';
console.log('===========================================')
console.log('==== COMIENZO DE LA FASE DE ELIMINATORIAS =====')
console.log('===============================================')

class OctavosFinal extends EuroMatches {
  constructor(name,teams = [], config)
  {
    super(name, teams, config); 
    this.matchQuarterFinal = []; 
  }
  
  setup(config) {
    const defaultConfig = { 
      rounds: 1, 
      gol: 3, 
    }
    this.config = Object.assign(defaultConfig, config)
  }
  customizeTeam(teamName) {
    //llamar al metodo padre 
    const customizeTeam = super.customizeTeam(teamName);
    return {
      ...customizeTeam
    }
  }
goals () {
  return Math.round(Math.random() * 2);
}
goals2 () {
  return Math.round(Math.random() * 4);
}
play(match) {
  let homeGoals = this.goals(); 
  let awayGoals = this.goals(); 
  if (homeGoals === awayGoals) {
    homeGoals += homeGoals;
    awayGoals += awayGoals; 
  } 
  return  { 
    homeTeamName: match.home,
    homeGoals: homeGoals, 
    awayTeamName: match.away,
    awayGoals: awayGoals 
  } 
}

WinOctavos(result) {
  console.log('==============================='); 
  //aqui vienen los valores de result de la clase EuroMatches.js 
  console.log(`${result.homeTeamName}:${result.homeGoals} vs ${result.awayTeamName}:${result.awayGoals}`)
  
  if (result.homeGoals > result.awayGoals) { 
    console.log(`======PASA A CUARTOS===> ${result.homeTeamName}`);
    //result.homeTeamName; 
  } else if (result.awayGoals > result.homeGoals){
    //return result.awayTeamName;
    console.log(`======PASA A CUARTOS ===> ${result.awayTeamName}`); 
  } else {
    console.log('Empate')
  }
}

goals3 () {
  return Math.round(Math.random() * 4);
}

playQuarter(matchQuarterPlay){
let homeGoals = this.goals(); 
let awayGoals = this.goals(); 
if (homeGoals === awayGoals) {
  homeGoals += homeGoals;
  awayGoals += awayGoals;
}
return  { 
  homeTeamNameQuarter: matchQuarterPlay.home,
  homeGoals: homeGoals, 
  awayTeamNameQuarter: matchQuarterPlay.away,
  awayGoals: awayGoals 
} 

}
WinQuarter(resultQuarter) {

  console.log(`${resultQuarter.homeTeamNameQuarter}:${resultQuarter.homeGoals} vs ${resultQuarter.awayTeamNameQuarter}:${resultQuarter.awayGoals}`)
  if (resultQuarter.homeGoals > resultQuarter.awayGoals) { 
    console.log(`======PASA A SEMI-FINAL===> ${resultQuarter.homeTeamNameQuarter}`);
    
  } else if (resultQuarter.awayGoals > resultQuarter.homeGoals){
    console.log(`======PASA A SEMI-FINAL===> ${resultQuarter.awayTeamNameQuarter}`);
  } else {
    console.log('Empate')
  }
}

goals4 () {
  return Math.round(Math.random() * 4);
}

playSemi(matchSemiPlay) {
let homeGoals = this.goals(); 
let awayGoals = this.goals(); 
if (homeGoals === awayGoals) {
  homeGoals += homeGoals;
  awayGoals += awayGoals;
}
return  { 
  homeTeamNameSemi: matchSemiPlay.home,
  homeGoals: homeGoals, 
  awayTeamNameSemi: matchSemiPlay.away,
  awayGoals: awayGoals 
} 
}

winSemi(resultSemi) {
  
  console.log(`${resultSemi.homeTeamNameSemi}:${resultSemi.homeGoals} vs ${resultSemi.awayTeamNameSemi}:${resultSemi.awayGoals}`)
  if (resultSemi.homeGoals > resultSemi.awayGoals) { 
    console.log(`======PASA A FINAL===> ${resultSemi.homeTeamNameSemi}`);
    
  } else if (resultSemi.awayGoals > resultSemi.homeGoals){
    console.log(`======PASA A FINAL===> ${resultSemi.awayTeamNameSemi}`);
  } else {
    console.log('Empate')
  }
  console.log('===================')
}

LosersSemi(resultSemi) {
  
  //console.log(`${resultSemi.homeTeamNameSemi}:${resultSemi.homeGoals} vs ${resultSemi.awayTeamNameSemi}:${resultSemi.awayGoals}`)
  if (resultSemi.homeGoals < resultSemi.awayGoals) { 
    console.log(`======3er PUESTO===> ${resultSemi.homeTeamNameSemi}`);
    
  } else if (resultSemi.awayGoals < resultSemi.homeGoals){
    console.log(`======3er PUESTO===> ${resultSemi.awayTeamNameSemi}`);
  } else {
    console.log('Empate')
  }
  console.log('===================')
}

goals5 () {
  return Math.round(Math.random() * 4);
}

playFinals(matchFinalPlay) {
  let homeGoals = this.goals(); 
  let awayGoals = this.goals(); 
  if (homeGoals === awayGoals) {
    homeGoals += homeGoals;
    awayGoals += awayGoals;
  }
  return  { 
    homeTeamNameFinal: matchFinalPlay.home,
    homeGoals: homeGoals, 
    awayTeamNameFinal: matchFinalPlay.away,
    awayGoals: awayGoals 
  } 
  }

  winFinal(resultFinal) {
    console.log(`${resultFinal.homeTeamNameFinal}:${resultFinal.homeGoals} vs ${resultFinal.awayTeamNameFinal}:${resultFinal.awayGoals}`)
    if (resultFinal.homeGoals > resultFinal.awayGoals) { 
      console.log(` ${resultFinal.homeTeamNameFinal}=========> CAMPEÓN DE EUROPA`);
      
    } else if (resultFinal.awayGoals > resultFinal.homeGoals){
      console.log(`${resultFinal.awayTeamNameFinal}=========> CAMPEÓN DE EUROPA`);
    } else {
      console.log('Empate')
    }
  console.log('===================')
  }

}

const  EuroCopa  = new OctavosFinal ('EUROCOPA', teams); 
console.log(`**** Participantes ****`); 
console.table(teams); 
console.log(``); 

EuroCopa.selectTeams(); 
EuroCopa.groupOne(); 
EuroCopa.groupTwo(); 
EuroCopa.playEuro();
EuroCopa.selectOctavos(); 
EuroCopa.playQuarterFinal();
EuroCopa.selectQuarter();  
EuroCopa.playSemiFinal(); 
EuroCopa.selectFinals(); 
EuroCopa.playFinal(); 




