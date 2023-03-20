export function filter(dataTeams, conference,divi) {
    if (conference) {
  
    return dataTeams.filter(team=>  team.conference === conference )
  }
  if (divi) {
    return dataTeams.filter(team=>  team.division === divi )
  }
  }