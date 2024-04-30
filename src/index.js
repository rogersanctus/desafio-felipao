
/**
 * Estrutura de um Herói:
 * [  Nome, [ [Título, [xp mínima, xp máxima]] ]  ]
**/
const AvailableHeros = [
  ["Zé", [["da Manga", [0, 1000]], ["do Acarajé", [500, 2500]], ["do Póti", [0, 4000]], ["da Moita", [0, 5000]]]],
  ["João", [["do Violão", [2000, 5000]], ["do Pé de Feijão", [2500, 7500]], ["do Boi", [3000, 8000]], ["das Cabras", [8000, 10000]]]],
  ["Pedim", [["de Tonha", [2500, 4000]], ["de Rosa", [500, 2000]], ["dos Teclados", [7000, 9200]], ["o Fera", [9000, 12000]]]],
  ["Maria", [["do Acarajé", [500, 5000]], ["das Ropa", [3500, 8500]], ["da Lancha", [1500, 9000]], ["do Peixe", [7000, 15000]]]],
  ["Rosa", [["da Marmita", [2500, 5000]], ["de Pedim", [2500, 4500]], ["do Baixiií", [7000, 10001]], ["Concurseira", [0, 15000]]]],
]

/**
 * Nível vs Xp
**/
const LevelsForXp = [
  ['Ferro', [0, 1000]],
  ['Bronze', [1001, 2000]],
  ['Prata', [2001, 5000]],
  ['Ouro', [5001, 7000]],
  ['Platina', [7001, 8000]],
  ['Ascendente', [8001, 9000]],
  ['Imortal', [9001, 10000]],
  ['Radiante', [10001]]
]

function randomIntFromInterval(min, max) {
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.max(min, Math.min(max, value));
}

const SelectedHeroVectorIdx = randomIntFromInterval(0, AvailableHeros.length - 1);

let SelectedHero = null;

if (SelectedHeroVectorIdx >= 0 && SelectedHeroVectorIdx < AvailableHeros.length) {
  SelectedHero = AvailableHeros[SelectedHeroVectorIdx];
}

if (SelectedHero) {
  const specializations = SelectedHero[1];
  const specializationIdx = randomIntFromInterval(0, specializations.length - 1);

  if (specializationIdx >= 0 && specializationIdx < specializations.length) {
    const specialization = specializations[specializationIdx];

    if (specialization) {
      const title = specialization[0];
      const name = SelectedHero[0] + " " + title;

      const xpRange = specialization[1];
      const xpMin = xpRange[0];
      const xpMax = xpRange[1];

      const xp = randomIntFromInterval(xpMin, xpMax);

      let level = null

      for (let i = 0; i < LevelsForXp.length; i++) {
        const levelForXp = LevelsForXp[i];
        const minMax = levelForXp[1];

        const min = minMax[0];
        let max = null;

        if (levelForXp.length > 1) {
          max = minMax[1]
        }

        if (xp >= min && (!max || xp <= max)) {
          level = levelForXp[0];
          break
        }
      }

      if (level) {
        console.log(name + ', com XP: ' + xp + ', está no nível de ' + level);
      } else {
        console.log("Nível inválido");
      }
    }
  }
}
