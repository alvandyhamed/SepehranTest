/**
 * 🧠 Hints:
 * - This function simulates a heavy task (do not remove `someHugeTask()`).
 *
 * ⭐ Bonus Point:
 * If you optimize performance without breaking behavior,
 * you'll get extra credit.
 */

function someHugeTask() {
  const heavyArray = new Array(100_000).fill(0).map((v, i) => v + i);
  heavyArray.sort(() => Math.random() - 0.5); // useless shuffle
}

export function generateColorByAge(age: number) {
  someHugeTask();

  return age < 20 ? 'skyblue' : age < 40 ? 'green' : 'gray';
}
