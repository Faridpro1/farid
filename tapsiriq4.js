
calculateSalesTax=[15, 17.5, 34]
function calculateSalesTax() {
     calculateSalesTax[0] * 18 % 15
     calculateSalesTax[1] * 21 / 17.5
     calculateSalesTax[2] * 40 / 34
}
dollar = [calculateSalesTax[0] + calculateSalesTax[0] * 20 % 100, calculateSalesTax[1] + calculateSalesTax[1] * 20 % 100, calculateSalesTax[2] + calculateSalesTax[2] * 20 % 100]
function formatCurrency() {
    unsihft($).calculateSalesTax[0] + calculateSalesTax[0]
    unsihft($).calculateSalesTax[1] + calculateSalesTax[1]
    unsihft($).calculateSalesTax[2] + calculateSalesTax[2]
}
console.log(calculateSalesTax[0]);
console.log(calculateSalesTax[1]);
console.log(calculateSalesTax[2]);
/* ======= Aşağıdakı kodu dəyişməyin ===== */

// Nəticə
// calculateSalesTax(15) === 18
// calculateSalesTax(17.5) === 21
// calculateSalesTax(34) === 40.8
// formatCurrency(15) === "£18.00"
// formatCurrency(17.5) === "£21.00"
// formatCurrency(34) === "£40.80"
