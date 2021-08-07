// 這邊的遊戲邏輯並不會牽扯到vue配置 可拉出來寫
const randomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      playHealth: 100,
      monsterHealth: 100,
      specialAttackChance: 3,
      canPlayGame: true,
      messageLogs: [],
    };
  },
  computed: {
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        this.monsterHealth = 0;
      }
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthBar() {
      if (this.playHealth < 0) {
        this.playHealth = 0;
      }
      return { width: `${this.playHealth}%` };
    },
    noSpecialChance() {
      return this.specialAttackChance <= 0 ? true : false;
    },
    gameOverInfo() {
      if (this.playHealth <= 0 && this.monsterHealth > 0) {
        this.canPlayGame = false;
        return "You lose";
      } else if (this.monsterHealth <= 0 && this.playHealth > 0) {
        this.canPlayGame = false;
        return "You win";
      } else if (this.monsterHealth <= 0 && this.playHealth <= 0) {
        this.canPlayGame = false;
        return "Draw";
      } else {
        this.canPlayGame = true;
      }
    },
  },
  methods: {
    attackMonster() {
      const attackValue = randomValue(5, 13);

      this.monsterHealth -= attackValue;

      this.addLogs("Player", "Attack Monster", attackValue);

      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = randomValue(5, 16);

      this.playHealth -= attackValue;

      this.addLogs("Monster", "Attack Player", attackValue);
    },
    specialAttack() {
      this.specialAttackChance--;
      const attackValue = randomValue(10, 25);

      this.monsterHealth -= attackValue;

      this.addLogs("Player", "Use Special Attack", attackValue);

      this.attackPlayer();
    },
    healPlayer() {
      const healValue = randomValue(5, 20);
      this.playHealth + healValue >= 100
        ? this.playHealth === 100
        : (this.playHealth += healValue);

      this.addLogs("Player", "Use Heal", healValue);

      this.attackPlayer();
    },
    startNewGame() {
      this.playHealth = 100;
      this.monsterHealth = 100;
      this.specialAttackChance = 3;
      this.canPlayGame = true;
      this.messageLogs = [];
    },
    surrender() {
      this.canPlayGame = false;
    },
    addLogs(who, what, value) {
      this.messageLogs.unshift({
        who,
        what,
        value,
      });
    },
  },
});

app.mount("#game");
