
let renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 500, 200)
};
renderCloud(x, y, 500, 200)
window.renderStatistics = function (ctx) {
    renderCloud(ctx, 110, 60, 'rgba(0,0,0,0.3)');
    renderCloud(ctx, 100, 50, '#fff')
}
renderStatistics(ctx, 110, 60, 'rgba(0,0,0,0.3)')
// let fireballSize = 22;
// let getFireballSpeed = function(left) {
//     if (left === true) {
//         return 5
//     }
//     return 2
// };
// let wizardSpeed = 3;
// let wizardWidth = 70;
// let getWizardHeight = function () {
//     return 1.337 * wizardWidth
// };
// function getWizardX(width) {
//    return width/2
// }
// getWizardX(500)

// function wizardWidth(height) {
//     he
// }