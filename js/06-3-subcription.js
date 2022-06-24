// Напиши скрипт проверки подписки пользователя при доступе к контенту
// - Есть три типа подписки: free, pro и vip.
// - Получить доступ могут только пользователи pro и vip.

const subscription = 'pro';

// Если пользователь pro или vip, тогда есть доступ

const canAccessContent = subscription === 'pro' || subscription === 'vip';
// true || false ==> true
// false || true ==> true
// false || false ==> false

console.log('Есть доступ к контенту?', canAccessContent);